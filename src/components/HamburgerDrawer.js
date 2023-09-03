import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {  createMuiTheme,createTheme,  useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import categories from '../data/category';
import NavInshorts from './NavInshorts';


const useStyles=styled({
  list:{
    width:250,
    padding:10,
  },
  fullList:{
    width:'auto',
  },
});


 export default function SwipeableTemporaryDrawer({setCategory}) {
  const classes=useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const prefersDarkMode=useMediaQuery("(prefers-color-scheme:dark");
  const theme=React.useMemo(
    ()=>
    createMuiTheme({
      palette: {
        type:prefersDarkMode ?"dark":"light",
      },
    }),
    [prefersDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem> Categories</ListItem>
        
          
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem  style={{height:40,borderRadius:3}} 
          button key={text} onClick={()=>{
            setCategory(text)
          }}>
          <ListItemText primary={text} />
            
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon/>
          </Button>
          <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('Left', false)}
            onOpen={toggleDrawer('Left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
    
    </div>
  );
}