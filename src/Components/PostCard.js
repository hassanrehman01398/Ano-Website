import React from "react";
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


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    
    
    card:{
      backgroundColor:'black',
      color:'#fff',
      minWidth: 275,
  },
  
  }
));


export default function PostCard(props){
    const classes = useStyles();
    return(
        <div className="postCard"
             style={{
                marginBottom: "10px",
            }}>
            <Card className={ classes.card } variant="outlined">
            <CardContent>
            <Typography variant="h5" style={{fontWeight:'500', color:'#FCA311'}} gutterBottom>
              {props.title}
            </Typography>
                
                <Typography variant="body1"
                            >
                
                <div>
                    
                    {props.content.split("\n").map((i,key) => {
                        return <div key={key}>{i}</div>;
                    })}
                </div>
                
                </Typography>
            </CardContent>
            
            <CardActions>
                <Button size="small" style={{color:"#FCA311"}} ><VisibilityIcon /><p style={{marginLeft:'5px'}}>23</p></Button>
                <Button size="small" style={{color:"#FCA311"}}><ReplyIcon /> <p  style={{marginLeft:'5px'}}>1</p> </Button>
            </CardActions>
            

            </Card>
        </div>
    );
}