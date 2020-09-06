import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import cx from 'classnames';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    
    
    card:{
      backgroundColor:'black',
      color:'#fff',
      minWidth: 275,
      display: 'flex',
  },
  
  }
));


export default function ReplyCard(props){
    const classes = useStyles();
  
    return(
        <div className="reply"
             style={{
                marginBottom: "10px",
            }}>
            <Card className={ classes.card } variant="outlined">
            <CardContent>
                
                <Typography variant="body1">
                
                <div>
                    {}
                    {props.content.reply_description}
                </div>
                
                </Typography>
            </CardContent>
            


            </Card>
        </div>
    );
}