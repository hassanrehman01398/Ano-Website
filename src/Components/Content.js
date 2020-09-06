
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CreateIcon from '@material-ui/icons/Create';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



  

const useStyles = makeStyles((theme) => ({
    margin: {
        //margin: theme.spacing(),
        backgroundColor: "#FCA311",
        fontWeight:"700"
      },
      type: {
        fontWeight: "600",
        //color:"#fff
        
      },
      color:{
          color:"#fff"
      },
      dis:{
          display:'flex',
          justifyContent:'space-between'
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));



export default function Content() {
    const classes = useStyles();
    var date=new Date().toLocaleString();
    const [posts, setposts] = useState([]);
    let sample=[];
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
      setCategory(event.target.value);
      console.log(event.target.value,"category")
    };



  //  async function hassan(){
   fetch('http://localhost:3000/count', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //   post_description: postContent,
        //   likes: 0,
        //   views: 0,
        //   posttitle: postTitle,
        //  posttime:curTime
        // })
      })
        .then((response )=> response.json())
        .then( item => {
        //  console.log("amaaz")
        //  console.log(item)
        //  sample[0]=item
          setposts(item)
        //  console.log(sample[0])
          if(Array.isArray(item)) {
           // console.log(item)
            sample=item
          //  console.log(sample)
          //  console.log("amaaz arshad")
          // setCards(item);
           //console.log(cards,"by hassan")
            // this.props.addItemToState(item[0])
            // this.props.toggle()
          } else {
            console.log('failure')
          }
        })
        .catch(err => console.log(err))


        function onSubmit(e){

          console.log("hello");
          
          }

          function callApi(e){
            console.log(e.target.value,"category")
            // fetch(``)
          }

      // hassan();
    return (
    <div >
        <div className={classes.color} style={{ textAlign: "center" }}>
      <Typography  variant="h5" className={classes.type} style={{color:'#FCA311'}} gutterBottom>
        The Only Platform Where You can be 100% Anonymous. No Login required &
        No Ip Tracing
      </Typography>
      <Typography variant="subtitle1" style={{color:"#fff"}}>
        A safe place to Write Anonymously
      </Typography>
        <Link to="/write" style={{
            textDecoration:'none'
        }}>
        <Button size="large" variant="contained" style={{marginTop:'0.75em'}} className={classes.margin}>
          Start Writing
          <CreateIcon/>
        </Button>
        </Link>
        </div>
        <div className={classes.color} style={{display:'flex', justifyContent:'space-between'}} >
        <Typography variant="body2" gutterBottom>
        Time : {date}
        </Typography>
        <Typography variant="body2" gutterBottom>
        1223 Visitors   
        </Typography>
        </div>        
        <div style={{marginTop:'10px',display:'flex', justifyContent:'space-between'}}>
        <Typography className={classes.color} variant="h6" gutterBottom>
        Total Posts: {posts} 
        </Typography>r
        <PopupState variant="popover" popupId="demo-popup-menu">
    
      {(popupState) => (
        // <React.Fragment>
        //   <Button variant="contained" className={classes.margin}   {...bindTrigger(popupState)}>
        //     Sort By
        //     <ArrowDropDownIcon fontSize='small'/>
        //   </Button>
       
        //   <Menu onChange={onSubmit} {...bindMenu(popupState)}>
     
        //     <MenuItem onClick={onsubmit}>Newest</MenuItem>
        //     <MenuItem onClick={popupState.close}>Maximum Views</MenuItem>
        //     <MenuItem onClick={popupState.close}>Minimum Views</MenuItem>
        //     <MenuItem onClick={popupState.close}>Reset Filter</MenuItem>
        //   </Menu>
        // </React.Fragment>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={category}
          onChange={(e)=>{callApi(e)}}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"newest"}>Newest</MenuItem>
          <MenuItem value={"maxviews"}>Maximum Views</MenuItem>
          <MenuItem value={"minviews"}>Minimum Views</MenuItem>
          <MenuItem value={"reset"}>Reset Filter</MenuItem>
        </Select>
      </FormControl>
      )}
    </PopupState>

        </div>
        
    </div>
  );
};
