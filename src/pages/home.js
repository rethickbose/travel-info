import React from "react";
import Input from "../components/input";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "0 0 25px 0"
  },
  header: {
    margin: "5% 0 1% 0",
    textAlign: "center"
  }
});

const Home = () => {
  const classes = useStyles();
  const mystyle = {
    color: "white",
    margin: "10px",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div>
      <div>
        <Typography variant="h4" className={classes.header} gutterBottom>
          Add City
        </Typography>
      </div>
      <Input />
    </div>
  );
};

export default Home;
