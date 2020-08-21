import React from "react";
import "./App.css";
import Thread from './Components/Thread'
import PersistentDrawerRight from './Components/Navbar';
import Write from './Components/Write';
import { ThemeProvider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
// import Write from "./Components/Write";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  AppColor: {
    backgroundColor: "black",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <PersistentDrawerRight/>
      {/* <Write/> */}
      {/* <Thread/> */}
      

    </div>
  );
}

export default App;
