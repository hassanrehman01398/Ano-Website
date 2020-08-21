import React from 'react'
import Typography from "@material-ui/core/Typography";
import cx from 'classnames';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({

    root: {
      minWidth: 275,
      marginTop:'20px'
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
    media: {
      height: 140,
      color:'#fff'
    }
  });


export default function About(){
    const classes = useStyles();
    return (
        <div>
            <Card className={ cx(classes.root,classes.card) } variant="outlined">
          <CardContent>
            
            <Typography variant="h3" style={{fontWeight:'500', color:'#FCA311',}} gutterBottom>
              <center>About Us</center> 
            </Typography>
            center>
                        <img src="https://i.pinimg.com/originals/17/2e/05/172e05d2a862ff36a5d17d3ed7c978d2.png"  width='300'/>
                        </center>
            <br/>
            </div>
            
            <Typography variant="h6">
              AnoWeb  is built to provide a safe place for everyone who wishes to freely share their thoughts, emotions, ideas, experiences and much more without the fear of being judged or labeled.  We acknowledge that providing an anonymous platform has the ability to break barriers in communication and stigmatization.
              <br />
              <br/>
              AnoWeb can be utilized as your own safe place where you can freely un-conceal your thoughts and emotions without any apprehensions. AnoWeb requires no log-in, your IP address is not tracked and we do not leave any cache files on your browser or SERVER.  This is to assure our users that we give utmost importance to their privacy and anonymity.  Keeping this in mind, we have also ensured that no comment section is available for the posts.  This is to further protect the writer of the post and to ensure no negative interactions or cyberbullying takes place.  We are hopeful that this will further encourage our users to share openly and to read stories of others, who are just like them or might be different but can still connect and learn at a certain level.
            <br/>
            <br/>

            </Typography>
          </CardContent>
          </Card>
        </div>
    )
}
