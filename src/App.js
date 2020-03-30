import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import axios from 'axios'



import About from './pages/about';
import Home from './pages/home';
import Navbar from './components/navbar';

axios.defaults.baseURL = 'http://localhost:4543';



 const App = () =>{

  return(
     <Router>
        <Navbar />
        <div className='container'>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/about" component={About} /> 
        </div>
        
    </Router>
  )

 }


export default App;
