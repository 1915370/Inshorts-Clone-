import { Container } from '@mui/material';
import React from 'react';
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = ({newsArray,newsResults,loadmore,setloadmore}) => {
 
  return(
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className='downloadtext'>
            For the best experience use Inshorts app on your 
            smartphone </span>
            <img
  alt="play store"
  height="80%"
  src="https://static.inshorts.com/inshorts-website/static_assets/bundle_assets/2023/08_aug/8_tue/0962b439417c6273eafdee27b89efd2692c35057.android_app_store.png"
/>

<img
  alt="app store"
  height="80%"
  src="https://static.inshorts.com/inshorts-website/static_assets/bundle_assets/2023/08_aug/8_tue/2cf5c734d5ce01acc8574199e26a905f5f2e8a69.ios_app_store.png"
/>

          </div>
          {
            newsArray.map((newsItem)=>{
              // console.log(newsItem);
              return(
                <NewsCard
                newsItem={newsItem} key={newsItem.title}/>
              );
            })
           }
           { newsArray.length<newsResults && (
              <>
              <hr />
            <button className='loadMore' 
            onClick={()=>{
              setloadmore(loadmore+20);
            }}>
              loadmore
            </button>
               </>
              
            )
           }
           
         

      </div>

    </Container>
    
  )
}

export default NewsContent;
