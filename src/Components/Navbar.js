import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
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
import Content from "./Content"
import Cards from './Cards'
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
import CallIcon from "@material-ui/icons/Call";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import Thread from './Thread';
import Word from './Word';
import About from './About';
import Terms from './Terms';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  link:{
    textDecoration: 'none',
    color: 'inherit'
  }
  
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    
    <Router>  
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "black" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          
            

            <Typography variant="h6" noWrap  className={classes.title}
                        >

            <Link to="/" style={{
                          textDecoration: 'none',
                          color: '#FCA311',
                          display: 'flex'
                        }}>
            <GroupAddIcon style={{color:'#FCA311',
                                    margin: '4px'}}/>
              AnoWeb
            </Link>
            </Typography>
          
         
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        style={{backgroundColor:'#333533'}}
        onClick={handleDrawerClose}
      >
        <div className={classes.drawerHeader} />
        {/* <Content />
        <Cards/> */}

        <Switch>
          <Route path="/" exact>
            <Content/>
            <Cards/>
          </Route>

          <Route path="/thread">
            <Thread/>
          </Route>

          <Route path="/write">
            <Word/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

          <Route path="/terms">
            <Terms/>
          </Route>
        </Switch>

        {/* <Typography className={classes.type}  variant="h5" gutterBottom>
        The Only Platform Where You can be 100% Anonymous. No Login required & No Ip Tracing
      </Typography>
        <Typography variant='h6' style={{textAlign:'center'}}>
        A safe place to Write Anonymously
        </Typography>
        <center>
        <Button  size="large" className={classes.margin}>
          Start Writing
        </Button></center> */}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          
          <ListItem button>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Helpline" />
          </ListItem>
          <Link to="/about" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          </Link>
          <Link to="/terms" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Terms and Conditions" />
          </ListItem>
          </Link>
        </List>
        <Divider />
        <List style={{ color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <a target="_blank" href="https://github.com/hassanrehman01398/Ano-Website" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
          </a>
        </List>
      </Drawer>
    </div>

    
    </Router>
      );
}
