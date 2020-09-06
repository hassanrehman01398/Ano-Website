import React, {useState,useEffect} from 'react'

//import PersistentDrawerRight from './Navbar';
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
//import Word from './Word'
//import Content from "./Content"
//import Cards from './Cards'
//import Icon from '@material-ui/core/Icon';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ListItemText from "@material-ui/core/ListItemText";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import RateReviewIcon from "@material-ui/icons/RateReview";
import InfoIcon from "@material-ui/icons/Info";
//import Button from "@material-ui/core/Button";
//import Word from './Word';
import CallIcon from "@material-ui/icons/Call";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
//import zIndex from "@material-ui/core/styles/zIndex";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import queryString from 'query-string';
import cx from 'classnames';
import ReplyIcon from '@material-ui/icons/Reply';
//import styles, { css } from 'styled-components';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ReplyCard from './ReplyCard';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


//import styles from './App.block.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    
    
  },
  roots:{
    minWidth: 275,
  },
  margin: {
    margin: theme.spacing(1),
    backgroundColor: "red",
  },
  main: {
    textAlign: "center",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  AppColor: {
    backgroundColor: "black",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },

  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  hide: {
    display: "none",
  },
  type: {
    fontWeight: "900",
    textAlign: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  card:{
    backgroundColor:'black',
    color:'#fff',
},
SnackBar: {
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
},
}));
  
export default function Thread(props)  {
  //Console.log(props.location.data
 useEffect(()=>{
  async function testter(){
    await fetch('http://localhost:3000/specificreplydata?reply_to=1', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({
    //  post_id:'1'

      
    // })
  })
    .then((response )=> {
      console.log(response.json(),"talhaishere")
      return response.json()})
    .then( async item => {
      console.log(item,"hhererererer")
    //   setdescription(item[0].post_description)
    //   settitle(item[0].posttitle)
    //   console.log(item[0].posttitle)
    // console.log(item[0].post_description)
await setReplies(item)
console.log(item)
      //setposts(item)
   
      if(Array.isArray(item)) {
        setreplys(item)
      //  setReplyContent(item)
      // replyList = replies.map(reply => <ReplyCard
      //   content = {item[0].reply_description}
      //    />
      //  );
       // setReplies(item)
       // replyList=item
        console.log(item)
      
    
      } else {
        console.log('failure')
      }
    })
    .catch(
      
      err => console.log(err+"yoyo")
    
    )

  }
  testter();
 },{})
  var res=1
 function render() {
    // url is 'https://www.example.com/user?id=123&type=4';
    // let url = props
    // let params = queryString.parse(url);
    // console.log("sufyan")
    var d=window.location.pathname
   
    res = d.substring(8, 10);
    console.log(res)
    //console.log(window.location.pathname);
    // The result will be like below
    // { id: 123, type: 4 }
    // other code
   }
   render()
  //aboutProps
  const classes = useStyles();
  const theme = useTheme();
  const [title,settitle]=useState([]);
  
  const [replys,setreplys]=useState([]);
  const [description,setdescription]=useState([]);
  const [open, setOpen] = React.useState(false);
  const [isReplying, setReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [replies, setReplies] = useState([]);
//   function getreplys(){
// //http://localhost:3000/specificreplydata?reply_to=1
// console.log("huzaiab"+res)
// fetch('http://localhost:3000/specificpostdata?reply_to='+res, {
//   method: 'get',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   // body: JSON.stringify({
//   //  post_id:'1'

    
//   // })
// })
//   .then((response )=> response.json())
//   .then( item => {
//     setdescription(item[0].reply_description)
   
//   console.log(item)
//   console.log("afnan ")
//     //setposts(item)
 
//     if(Array.isArray(item)) {
// console.log(item)
//      // sample=item
//      // console.log(sample)
//       console.log("amaaz arshad")
  
//     } else {
//       console.log('failure')
//     }
//   })
//   .catch(err => console.log(err))
//   }

  let replyList = replies.map(reply => <ReplyCard
    content = {reply.content}
     />
   );
   
//http://localhost:3000/specificreplydata?reply_to='+res
  fetch('http://localhost:3000/specificpostdata?post_id='+res, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //  post_id:'1'
  
          
        // })
      })
        .then((response )=> response.json())
        .then( item => {
          console.log(item);
          setdescription(item[0].post_description)
          settitle(item[0].posttitle)
          console.log(item[0].posttitle)
        console.log(item[0].post_description)
        console.log("afnan ")
          //setposts(item)
       
          if(Array.isArray(item)) {

     console.log(item)
           // sample=item
           // console.log(sample)
            console.log("amaaz arshad")
        
          } else {
            console.log('failure')
          }
        })
        .catch(err => console.log(err))
   //getreplys()
    
   fetch('http://localhost:3000/specificreplydata?reply_to='+res, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({
    //  post_id:'1'

      
    // })
  })
    .then((response )=> response.json())
    .then( item => {
    //   setdescription(item[0].post_description)
    //   settitle(item[0].posttitle)
    //   console.log(item[0].posttitle)
    // console.log(item[0].post_description)

      //setposts(item)
   
      if(Array.isArray(item)) {
        //reply
      console.log(item);
      setReplies(item)
      //  setReplyContent(item)
      // replyList = replies.map(reply => <ReplyCard
      //   content = {item[0].reply_description}
      //    />
      //  );
       // setReplies(item)
       // replyList=item
        console.log(item)
        console.log("amazgn")
       // sample=item
       // console.log(sample)
        console.log("amaaz arshad")
    
      } else {
        console.log('failure')
      }
    })
    .catch(err => console.log(err))
//getreplys()

///replyList=replys.map()

  const handleOpenSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const replyForm = (
    <form method="POST" id="reply-form" onSubmit={onSubmit}>

      
      
    <center>  
    <TextareaAutosize aria-label="empty textarea" placeholder="Write you reply here..." 
                      className={classes.roots, classes.root}
                      style={{
                          width:"95%",
                          padding:"15px",
                        marginBottom:'10px',
                          fontSize:'20px',
                          fontFamily:'inherit',
                          }}
                      value = {replyContent} 
                      onChange={handleOnChange}
                      />
    
    <Button  className="reply-btn" type="submit" size="large" variant="contained" 
            style={{
              marginTop:'10px',
              float:'right',
              backgroundColor:'#FCA311',
              fontWeight:"700",
              }} 
              className={classes.margin}
              >
            Reply
      </Button>
      <Button  className="cancel-btn" size="large" variant="contained" 
            style={{
              marginTop:'10px',
              float:'right',
              backgroundColor:'#FCA311',
              fontWeight:"700",
              }} 
              className={classes.margin}
              onClick={handleCancel}
              >
            Cancel
      </Button>
      </center>
      </form>
  );

  function handleOnChange(e){
    setReplyContent(e.target.value);
  }
  
  function handleCancel(){
    setReplyContent('');
    setReplying(!isReplying);

  }

  function handleReplyButton(){
    setReplying(!isReplying);
  }

  function onSubmit(e){
    e.preventDefault();
    if(replyContent.length===0){
      setSnackMessage('Can\'t Post Empty Reply');
      handleOpenSnack();
    }
    else{
      console.log(replyContent);
      var curTime = new Date().toLocaleString();
    //console.log(postTitle+postContent);
    e.preventDefault()
    fetch('http://localhost:3000/reply', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reply_to:res,
        reply_description:replyContent,
        likes:0,
        views:0,
        replytime:curTime

        
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
      const newReply = {content: `${replyContent}`};
      setReplies([...replies, newReply]);
      setReplyContent('');
      setReplying(!isReplying);

      setSnackMessage('Reply Submitted!');
      handleOpenSnack();
      
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
        
     
      
      
        <div>
         
        <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} style={{
          fontFamily: 'inherit',
          backgroundColor: '#FCA311',
          color: 'black'
        }}>
          {snackMessage}
        </Alert>
      </Snackbar>
        
        
        
        
        {/* <Content />
          <Cards/> */}
        <div className="original-post"
            style={{
                marginBottom: "20px"
            }}>
                <div>
            <Card className={ cx(classes.roots,classes.card) } variant="outlined">
            <CardContent>
                <Typography variant="h5" style={{fontWeight:'500', color:'#FCA311'}} gutterBottom>
                {title}
                </Typography>
                <Typography variant="body1">
                {description}
                <br />
                </Typography>
            </CardContent>
             
            {isReplying?
                  replyForm
                    :
                    <CardActions>
                    <Button size="small" style={{color:"#FCA311"}} ><VisibilityIcon /><p style={{marginLeft:'5px'}}>23</p></Button>
                    <Button size="small"
                            style={{color:"#FCA311"}}
                            onClick={handleReplyButton}><ReplyIcon /> <p  style={{marginLeft:'5px'}}>1</p> </Button>
                    </CardActions>
                  }

            </Card>
            </div>
        </div>
        <div className="reply"
             style={{
                marginBottom: "10px",
                marginLeft: "30px"
            }}>
            {/* {replyList} */}
          
            {replies.map((reply)=>{
              console.log(reply,"reply")
              return(
                <ReplyCard
                content = {reply}
                 />
              )
            })}
        </div>
        
        </div>
       
     
      
    
    )
}
