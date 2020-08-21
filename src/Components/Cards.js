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
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  const sample = [{title: "Hello", content: "content ajksdbakbdakbdah jhasbdjhasbd hasbdjhas jhsdb kjbkjb \r hvjv chgchgchgcghchgchgcghchgc fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh uuuuuuuuuuuuuuuuuuuuuuuuuuuuu tttttttttttttttttttttttt                  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhhh uuuuuuuuuuuuuuuuuuuuuuuuuuuuu tttttttttt"},
  {title: "Hello2", content: "content ajksdbakbdakbdah jhasbdj "}];
  const [cards, setCards] = useState(sample);
  

  const cardsList = cards.map(card  => 
    <div style={{ marginTop: "20px" }}>
      <Link className={classes.link} to="/thread">
          <PostCard className={cx(classes.root, classes.card)} title={card.title} content={card.content}/>
      </Link>
    </div>
      
   );
  
 
  
  

  return (
    <div style={{ marginTop: "10px" }}>
      {cardsList}
      
    </div>
  );
}
