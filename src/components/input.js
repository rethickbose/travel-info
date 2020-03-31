import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4543";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "35ch"
    }
  }
}));

export default function ColorTextFields() {
  const classes = useStyles();

  const [countryName, setcountryName] = useState("");
  const [cityName, setcityName] = useState("");
  const [continent, setcontinent] = useState("");
  const [currencyUsed, setcurrencyUsed] = useState("");
  const [languages, setlanguages] = useState([]);

  const handleCOUNTRYNAMEChange = e => {
    setcountryName(e.target.value);
  };

  const handleCITYNAMEChange = e => {
    setcityName(e.target.value);
  };

  const handleCONTINENTChange = e => {
    setcontinent(e.target.value);
  };

  const handleCURRENCYChange = e => {
    setcurrencyUsed(e.target.value);
  };

  const handleLANGUAGESChange = e => {
    setlanguages(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const saveObject = {
      countryName: countryName,
      cityName: cityName,
      continent: continent,
      currencyUsed: currencyUsed,
      languages: languages
    };
    axios
      .post("http://localhost:4543/api/create-new-entry", saveObject)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
      method="post"
    >
      <TextField
        id="countryName"
        label="COUNTRY NAME"
        variant="outlined"
        color="secondary"
        onChange={handleCOUNTRYNAMEChange}
      />
      <TextField
        id="cityName"
        label="CITY NAME"
        variant="outlined"
        color="secondary"
        onChange={handleCITYNAMEChange}
      />
      <br />
      <TextField
        id="continent"
        label="CONTINENT"
        variant="outlined"
        color="secondary"
        onChange={handleCONTINENTChange}
      />
      <br />

      <TextField
        id="currencyUsed"
        label="CURRENCY"
        variant="outlined"
        color="secondary"
        onChange={handleCURRENCYChange}
      />
      <TextField
        id="languages"
        label="LANGUAGE SPOKEN"
        variant="outlined"
        color="secondary"
        onChange={handleLANGUAGESChange}
      />
      <br />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Save
      </Button>
    </form>
  );
}
