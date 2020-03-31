import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4543";

const useStyles = makeStyles(theme => ({
  header: {
    margin: "5% 0 1% 0"
  },
  fields: {
    margin: "0 0 25px 0"
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
        className={classes.fields}
        fullWidth
        label="Country Name"
        variant="outlined"
        color="primary"
        onChange={handleCOUNTRYNAMEChange}
      />
      <TextField
        id="cityName"
        className={classes.fields}
        fullWidth
        label="City Name"
        variant="outlined"
        color="primary"
        onChange={handleCITYNAMEChange}
      />
      <TextField
        id="continent"
        className={classes.fields}
        fullWidth
        label="Continent"
        variant="outlined"
        color="primary"
        onChange={handleCONTINENTChange}
      />
      <TextField
        id="currencyUsed"
        className={classes.fields}
        fullWidth
        label="Currency"
        variant="outlined"
        color="primary"
        onChange={handleCURRENCYChange}
      />
      <TextField
        id="languages"
        className={classes.fields}
        fullWidth
        label="Language Spoken"
        variant="outlined"
        color="primary"
        onChange={handleLANGUAGESChange}
      />
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
