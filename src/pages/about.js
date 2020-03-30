/*

import React from 'react'
import {useState} from 'react'
import axios from 'axios';

const About = ( {posts} ) =>{

   
    return(
        <div>
                <h2>about page </h2>

                {posts.map((article,key)=>(  
                <div>
                    <p>
                    {article.countryName}
                    {article.cityName}
                    {article.continent}
                    {article.currencyUsed}
                    {article.languages}
                    
                    </p>
                </div>


                )  )}
        </div>
        
    )
}

export default About;

*/

import React from 'react'
import {useState} from 'react'
import axios from 'axios';

const About = ( {posts} ) =>{


    return(
            <div>
             
                        <table class="striped">
                        <thead>
                        <tr>
                            <th>country Name</th>
                            <th>city Name</th>
                            <th>continent</th>
                            <th>Currency Used</th>
                            <th>Languages Spoken </th>
                        </tr>
                        </thead>
                        {posts.map((article,key)=>(

                        <tbody>
                        <tr>
                            <td> {article.countryName}</td>
                            <td>{article.cityName}</td>
                            <td>{article.continent}</td>
                            <td>{article.currencyUsed}</td>
                            <td>{article.languages}</td>
                        </tr>
                        
                        </tbody>
                        )  )}
                        </table>
                       
            </div>            

    )

}


export default About;
