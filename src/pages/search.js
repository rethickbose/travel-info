
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
 const displayBlogPost = (posts) => {

                    if (!posts.length) return null;
                
                
                    return posts.map((post, cityName) => (
                    <div key={cityName} className="blog-post__display">
                        <h3>{post.countryName}</h3>
                        <p>{post.continent}</p>
                        <p>{post.currencyUsed}</p>
                        <p>{post.languages}</p>
                        <p>{post.cityName}</p>
                    </div>
            ));
          };
 .then(res => console.log(res)) 
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



const Search=(  )=>{

    const classes = useStyles();

    const [countryName, setcountryName] = useState('');
    const [cityName, setcityName] = useState('');
    const [continent, setcontinent] = useState('');
    const [currencyUsed, setcurrencyUsed] = useState('');
    const [languages, setlanguages] = useState([]);
    
    const displayBlogPost = (posts) => {

        if (!posts.length) return null;
        console.log(<displayBlogPost posts/>)

    
        return posts.map((post, cityName) => (
        <div key={cityName} className="blog-post__display">
            <h3>{post.countryName}</h3>
            <p>{post.continent}</p>
            <p>{post.currencyUsed}</p>
            <p>{post.languages}</p>
            <p>{post.cityName}</p>
        </div>
        
));
};
    const [state,  setState]=useState([]);

    const handlecityNameChange =(e)=> {
        setcityName(e.target.value);
      }



      const handleSubmit =(e)=> {
                e.preventDefault();

                const saveObject = {
                    
                    cityName: cityName
                    
                }
               
            console.log(saveObject)
                
                
                        axios     
                        .post("http://localhost:4543/api/city",saveObject)      
                        
                        .then(res=>{setState(res.data)
                        console.log(state)})    
                        .catch(err => console.log(err));

          displayBlogPost(state)
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
            
         </form> 
         </div>
    )
}





export default Search