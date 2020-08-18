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
//import styles from './App.block.css';

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
  }
});

export default function Cards() {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{marginBottom:'10px'}}>
        <Card className={ cx(classes.root,classes.card) } variant="outlined">
          <CardContent>
            <Typography variant="h5" style={{fontWeight:'500', color:'#FCA311'}} gutterBottom>
              Huzaifa Shuja
            </Typography>
            <Typography variant="body1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              dolorem eligendi ab ratione quis commodi officiis suscipit quos
              delectus optio officia illum impedit accusantium natus laboriosam
              quam quo reiciendis mollitia!
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{color:"#FCA311"}} ><VisibilityIcon /><p style={{marginLeft:'5px'}}>23</p></Button>
            <Button size="small" style={{color:"#FCA311"}}><ReplyIcon /> <p  style={{marginLeft:'5px'}}>1</p> </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{marginBottom:'10px'}}>
        <Card className={ cx(classes.root,classes.card) } variant="outlined">
          <CardContent>
            <Typography variant="h5" style={{fontWeight:'500', color:'#FCA311'}} gutterBottom>
              Huzaifa Shuja
            </Typography>
            <Typography variant="body1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              dolorem eligendi ab ratione quis commodi officiis suscipit quos
              delectus optio officia illum impedit accusantium natus laboriosam
              quam quo reiciendis mollitia!
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{color:"#FCA311"}} ><VisibilityIcon /><p style={{marginLeft:'5px'}}>23</p></Button>
            <Button size="small" style={{color:"#FCA311"}}><ReplyIcon /> <p  style={{marginLeft:'5px'}}>1</p> </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{marginBottom:'10px'}}>
        <Card className={ cx(classes.root,classes.card) } variant="outlined">
          <CardContent>
            <Typography variant="h5" style={{fontWeight:'500', color:'#FCA311'}} gutterBottom>
              Huzaifa Shuja
            </Typography>
            <Typography variant="body1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              dolorem eligendi ab ratione quis commodi officiis suscipit quos
              delectus optio officia illum impedit accusantium natus laboriosam
              quam quo reiciendis mollitia!
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{color:"#FCA311"}} ><VisibilityIcon /><p style={{marginLeft:'5px'}}>23</p></Button>
            <Button size="small" style={{color:"#FCA311"}}><ReplyIcon /> <p  style={{marginLeft:'5px'}}>1</p> </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{marginBottom:'10px'}}>
        <Card className={ cx(classes.root,classes.card) } variant="outlined">
          <CardContent>
            <Typography variant="h5" style={{fontWeight:'500', color:'#FCA311'}} gutterBottom>
              Huzaifa Shuja
            </Typography>
            <Typography variant="body1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              dolorem eligendi ab ratione quis commodi officiis suscipit quos
              delectus optio officia illum impedit accusantium natus laboriosam
              quam quo reiciendis mollitia!
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{color:"#FCA311"}} ><VisibilityIcon /><p style={{marginLeft:'5px'}}>23</p></Button>
            <Button size="small" style={{color:"#FCA311"}}><ReplyIcon /> <p  style={{marginLeft:'5px'}}>1</p> </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{marginBottom:'10px'}}>
        <Card className={ cx(classes.root,classes.card) } variant="outlined">
          <CardContent>
            <Typography variant="h5" style={{fontWeight:'500', color:'#FCA311'}} gutterBottom>
              Huzaifa Shuja
            </Typography>
            <Typography variant="body1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              dolorem eligendi ab ratione quis commodi officiis suscipit quos
              delectus optio officia illum impedit accusantium natus laboriosam
              quam quo reiciendis mollitia!
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{color:"#FCA311"}} ><VisibilityIcon /><p style={{marginLeft:'5px'}}>23</p></Button>
            <Button size="small" style={{color:"#FCA311"}}><ReplyIcon /> <p  style={{marginLeft:'5px'}}>1</p> </Button>
          </CardActions>
        </Card>
      </div>
      
    </div>
  );
}
