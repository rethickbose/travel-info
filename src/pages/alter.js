import React from "react";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    margin: "0 0 25px 0"
  },
  header: {
    margin: "5% 0 1% 0",
    textAlign: "center"
  }
});

const Alter = () => {
  const [cityName, setcityName] = useState("");
  const [currencyUsed, setcurrencyUsed] = useState("");

  const classes = useStyles();

  const handleCITYNAMEChange = e => {
    setcityName(e.target.value);
  };
  const handleCURRENCYChange = e => {
    setcurrencyUsed(e.target.value);
  };

  const handleUpdateSubmit = e => {
    e.preventDefault();
    const saveObject = {
      cityName: cityName,
      currencyUsed: currencyUsed
    };
    axios
      .post("http://localhost:4543/api/city-update-currency", saveObject)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const [cityname1, setcityname1] = useState([]);

  const handlecityname1Change = e => {
    setcityname1(e.target.value);
  };

  const handleDeleteSubmit = e => {
    e.preventDefault();
    const saveObject1 = {
      cityName: cityname1
    };
    axios
      .post("http://localhost:4543/api/delete-city", saveObject1)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleUpdateSubmit}>
          <Typography variant="h4" className={classes.header} gutterBottom>
            Alter City Currency
          </Typography>
          <TextField
            id="cityName"
            className={classes.root}
            fullWidth
            label="City Name"
            variant="outlined"
            color="primary"
            onChange={handleCITYNAMEChange}
          />
          <TextField
            id="currencyUsed"
            className={classes.root}
            fullWidth
            label="Currency Used"
            variant="outlined"
            color="primary"
            onChange={handleCURRENCYChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            UPDATE
          </Button>
          <Typography variant="h4" className={classes.header} gutterBottom>
            Delete City Details
          </Typography>
        </form>

        <form onSubmit={handleDeleteSubmit}>
          <div>
            <TextField
              id="cityname1"
              className={classes.root}
              fullWidth
              label="City Name"
              variant="outlined"
              color="primary"
              onChange={handlecityname1Change}
            />
            <Button
              type="submit"
              className={classes.root}
              fullWidth
              variant="contained"
              color="primary"
            >
              DELETE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Alter;
