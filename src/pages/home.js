import React from 'react'
import background from './homelogo.jpeg';

import ImgMediaCard from '../components/cards.js'

const Home = () =>{

    return(
        <div  className="image">
            <h2  >Travel Information Service </h2>
              <br />

             < ImgMediaCard /> 
             
             <br />
             <br />

             < ImgMediaCard />              
                
        </div>
        
    )
}

export default Home;