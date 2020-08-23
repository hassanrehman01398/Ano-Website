import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";
//import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  margin: {
    //margin: theme.spacing(),
    backgroundColor: "#FCA311",
    fontWeight:"700",
    
    textAlign:'right',
    
  }}));

export default function Word() {
 const classes = useStyles();
 const [postContent, setpostContent] = useState('');
 const [postTitle, setpostTitle] = useState('');

 function handleContentChange(e){
   setpostContent(e.target.value);
 }

 function handleTitleChange(e){
  setpostTitle(e.target.value);
}
// submitFormAdd = e => {
 
// }
 function post(e){
  //  e.preventDefault();

   if(postContent.length === 0){
    console.log('content is empty');
    
  }
  else{
    var curTime = new Date().toLocaleString();
    console.log(postTitle+postContent);
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post_description: postContent,
        likes: 0,
        views: 0,
        posttitle: postTitle,
       posttime:curTime
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
    setpostContent('');
    setpostTitle('');
  }
 }

  return(
    <div style={{zIndex: 2}}>
      <form action="" method="post">
      <TextareaAutosize 
      aria-label="empty textarea" 
      placeholder="Heading of article" 
      rowsMax={1}
      rowsMin={1}
      overflow="hidden"
      maxlength="70"
      value={postTitle} 
      style={
        {width:"100%",padding:"15px",fontSize:'30px',fontFamily:'inherit',fontWeight:'500'}

        }
      onChange={handleTitleChange} />
        
    
  <TextareaAutosize aria-label="empty textarea" placeholder="Write content of article here..."
      value={postContent} 
      style={{width:"100%",padding:"15px",marginTop:'30px',fontSize:'20px',fontFamily:'inherit'}}
      onChange={handleContentChange} />
  <Link to="/thread" onClick={post}>
  <Button  className="submit-btn" type="submit" size="large" variant="contained" 
            
           style={{
             marginTop:'30px',
             float:'right',
             
             
             }} 
             className={classes.margin}>
               
          
          submit
        </Button>
        </Link>
  </form>
</div>
  );
};