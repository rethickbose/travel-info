import React from 'react';
import { useState } from "react";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import axios from "axios";





const Alter= () =>
{
    const [cityName, setcityName] = useState('');
    const [currencyUsed, setcurrencyUsed] = useState('');
    
    

    const handleCITYNAMEChange =(e)=> {
        setcityName(e.target.value);
      }
    const handleCURRENCYChange =(e)=> {
        setcurrencyUsed(e.target.value);
      }
    
      const handleUpdateSubmit =(e)=> {
        e.preventDefault();
          const saveObject = {
          cityName: cityName,
          currencyUsed: currencyUsed,
          
        }
       // console.log(countryName, cityName, continent, currencyUsed, languages);
          axios     
          .post("http://localhost:4543/api/city-update-currency", saveObject)      
          .then(res => console.log(res))      
          .catch(err => console.log(err));
    
      }

    
    
    const [cityname1, setcityname1] = useState([]);



    const handlecityname1Change =(e)=> {
        setcityname1(e.target.value);
      }
      
      
      

      const handleDeleteSubmit =(e)=> {
        e.preventDefault();
          const saveObject1 = {
            cityName: cityname1,
         
          
        }
       // console.log(countryName, cityName, continent, currencyUsed, languages);
          axios     
          .post("http://localhost:4543/api/delete-city", saveObject1)      
          .then(res => console.log(res))      
          .catch(err => console.log(err));
    
      }
    
    






    return(
    <div>
        
      <div>
        <br />
        <br />
        <br />
      <h5>ALTER DETAILS</h5>
      <form onSubmit={handleUpdateSubmit} >
        <TextField
          id="cityName"
          fullWidth
          label="CITY NAME"
          variant="outlined"
          color="secondary"
          onChange={handleCITYNAMEChange}
        />
        <TextField
          id="currencyUsed"
          fullWidth
          label="currency Used"
          variant="outlined"
          color="secondary"
          onChange={handleCURRENCYChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          
        >
          UPDATE
        </Button>
         
            <br />
            <br />
            <br />
            <br />
            <br />
         
            <h5>DELETE DETAILS</h5>   <br />
       
        



      </form>
        
      <form onSubmit={handleDeleteSubmit}>
        <div>
        <TextField
          id="cityname1"
          fullWidth
          label="CITY NAME"
          variant="outlined"
          color="secondary"
          onChange={handlecityname1Change}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          
        >
          DELETE
        </Button> </div>
      </form>
    </div>
</div>
    )
}

export default Alter

/*
onSubmit={handleSubmit}
 onChange={handlecityNameChange}


*/