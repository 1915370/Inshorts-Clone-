
import React, { useEffect, useState } from "react";
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from "./NewsContent/NewsContent";
import axios from "axios";
import apikey from "./data/config";
function App() {
  const[category,setcategory]=useState("general");
  const[newsArray,setnewsArray]=useState([]);
 const[newsResults,setnewsResults]=useState([]);
 const [loadmore,setloadmore]=useState(20);
  const newsApi=async()=>{
    try{
      const news= await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey} 
        &category=${category}&pageSize=${loadmore}`);

        // console.log(news.data.articles);
        setnewsArray(news.data.articles);
      
        setnewsResults(news.data.totalResults);
      

    }catch(error){
      console.log(error);
    }
  };
  // console.log(newsArray);

  useEffect(()=>{
      newsApi();
 },[category,newsResults,loadmore])
  return (
    <div>
      <NavInshorts  setCategory={setcategory}/>
      <NewsContent
      setloadmore={setloadmore}
       newsArray={newsArray} 
        newsResults={newsResults}
        loadmore={loadmore}/>
    </div>
    
  );
}

export default App;
