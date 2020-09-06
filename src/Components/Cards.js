import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import cx from 'classnames';
import ReplyIcon from '@material-ui/icons/Reply';
//import styles, { css } from 'styled-components';
import VisibilityIcon from '@material-ui/icons/Visibility';
//import styles from './App.block.css';
import PostCard from './PostCard';


const useStyles = makeStyles({

  root: {
    minWidth: 275,
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },

  dis: {
    fontWeight: "600",
  },
  
  card:{
      backgroundColor:'black',
      color:'#fff',
  },
  link:{
    textDecoration: 'none'
  }
});

export default function Cards() {
  const [cards, setCards] = useState([]);
  const classes = useStyles();

  //const bull = <span className={classes.bullet}>•</span>;
  let sample=[];
  async function hassan(){
 await  fetch('https://warm-eyrie-33819.herokuapp.com/crud', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
     
    })
      .then(async (response )=> await response.json())
      .then(async item => {
        if(Array.isArray(item)) {
         // console.log(item)
          sample=await item
        //  console.log(sample)
         setCards(item);
       
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))}
      hassan()
  //console.log(cards,"hassan");

  

  const cardsList = cards.map(card  => 
    <div style={{ marginTop: "20px" }}>
      <Link className={classes.link} to={{pathname:'/thread/'+card.post_id, data:'1'}} > 
          <PostCard className={cx(classes.root, classes.card)} title={card.posttitle} content={card.post_description}/>
      </Link>
    </div>
      
   );
  
 
  
  

  return (
    <div style={{ marginTop: "10px" }}>
      {cardsList}
      
    </div>
  );
}
