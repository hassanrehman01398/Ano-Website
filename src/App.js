import React from "react";
import "./App.css";
import PersistentDrawerRight from './Components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  AppColor:{
    backgroundColor:'black',
  }
  
}));



function App() {
  const classes = useStyles();
  
  return (
    <div>
      <PersistentDrawerRight huzaifa={classes.AppColor} />
    </div>
  );
}

export default App;
