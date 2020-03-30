
/*
import  React from 'react';

const Search=()=>{

    return(
        <div>
        <h5>search</h5>
        <form>
                            <div class="input-field">
                                <input id="search" type="search" required /> 
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                            </div>
         </form> 
         </div>
    )
}

export default Search


*/

import  React  from 'react';
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(30),
        width: '30ch',
        
      },
    },
  }));



const Search=( {query} )=>{

    const classes = useStyles();

    const [countryName, setcountryName] = useState('');
    const [cityName, setcityName] = useState('');
    const [continent, setcontinent] = useState('');
    const [currencyUsed, setcurrencyUsed] = useState('');
    const [languages, setlanguages] = useState([]);

    const handlecityNameChange =(e)=> {
        setcityName(e.target.value);
      }

      const handleSubmit =(e)=> {
        e.preventDefault();

        const saveObject = {
            
            cityName: cityName,
            
          }
    
        
        /*
                axios     
                .post("http://localhost:4543/api/city",saveObject)      
                .then(res => console.log(res))      
                .catch(err => console.log(err));
          */
      }

    return(
        <div>
        <h5>search</h5>
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
            <div>
                {query.map((article,key)=>(
                      <div>  
                        
                        <p>
                            {key=cityName}
                            {article.countryName}
                            {article.cityName}
                            {article.continent}
                            {article.currencyUsed}
                            {article.languages}
                        </p>
                        </div>

                            )  )}

                </div>
         </form> 
         </div>
    )
}

export default Search