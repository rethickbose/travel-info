import React from "react";
import { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(30),
      width: "30ch"
    }
  },
  header: {
    margin: "5% 0 1% 0",
    textAlign: "center"
  },
  fields: {
    margin: "0 0 25px 0"
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
      <Typography variant="h4" className={classes.header} gutterBottom>
        Search City Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="countryName"
          className={classes.fields}
          fullWidth
          label="City Name"
          variant="outlined"
          color="primary"
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
