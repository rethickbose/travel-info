import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(30),
      width: "30ch"
    }
  }
}));

const DisplayBlogPost = ({ cityData }) => {
  return (
    <div className="blog-post__display">
      <h4>{cityData.cityName}</h4>
      <p>{cityData.countryName}</p>
      <p>{cityData.continent}</p>
      <p>{cityData.currencyUsed}</p>
      <p>{cityData.languages.map(language => `${language} `)}</p>
    </div>
  );
};

const Search = () => {
  const classes = useStyles();
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState(null);

  const handlecityNameChange = e => {
    setCityName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const saveObject = {
      cityName: cityName
    };
    axios
      .post("http://localhost:4543/api/city", saveObject)
      .then(res => setCityData(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h5>Search</h5>
      <form onSubmit={handleSubmit}>
        <TextField
          id="countryName"
          fullWidth
          label="CITY NAME"
          variant="outlined"
          color="secondary"
          onChange={handlecityNameChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Search
        </Button>
        {cityData ? <DisplayBlogPost cityData={cityData} /> : null}
      </form>
    </div>
  );
};

export default Search;
