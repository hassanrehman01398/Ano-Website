import React from "react";
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
  
import { makeStyles/*, useTheme*/ } from "@material-ui/core/styles";

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
      }
}));

export default function Content() {
    const classes = useStyles();
    //const theme = useTheme();
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
        Time Spent: 303D 21h 37m 21s   
        </Typography>
        <Typography variant="body2" gutterBottom>
        1223 Visitors   
        </Typography>
        </div>        
        <div style={{marginTop:'10px',display:'flex', justifyContent:'space-between'}}>
        <Typography className={classes.color} variant="h6" gutterBottom>
        Total Posts: 3084   
        </Typography>
        <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" className={classes.margin}   {...bindTrigger(popupState)}>
            Sort By
            <ArrowDropDownIcon fontSize='small'/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Newest</MenuItem>
            <MenuItem onClick={popupState.close}>Maximum Views</MenuItem>
            <MenuItem onClick={popupState.close}>Minimum Views</MenuItem>
            <MenuItem onClick={popupState.close}>Reset Filter</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>

        </div>
        
    </div>
  );
};
