import React, { useState,useEffect, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import axios from 'axios'


import Search from './pages/search'
import GlobalInfo from './pages/about';
import Home from './pages/home';
import Navbar from './components/navbar';

axios.defaults.baseURL = 'http://localhost:4543';



 const App = () =>{

   const [posts,setPosts] = useState([]);

   useEffect(
    ()=>{
    axios
    .get("http://localhost:4543/api/cities")
    .then(res=> setPosts(res.data))
    .catch(error=>console.log(error))
    }

   );

   const [query,setQuery] = useState([]);

   useEffect(
    ()=>{
    axios
    .post("http://localhost:4543/api/city")
    .then(res=> setQuery(res.data))
    .catch(error=>console.log(error))
    }

   );

   





  return(
     <Router>
        <Navbar />
        <div className='container'>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/globalinfo" render={ ()=><GlobalInfo posts={posts} />} /> 
            <Route exact path="/search" render={     ()=><Search  /> } />
        </div>
        
    </Router>
  )

 }


export default App;