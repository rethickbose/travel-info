
import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png'


const Navbar= () =>{

return(    
<div>

        <nav>
           <div>
                <div class="nav-wrapper">
                
                <img src={logo} height='60' alt='logo'/> 
                
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link  to="/">Home </Link></li>
                    <li><Link to="/about">About </Link></li>
                    <li>
                        <form>
                            <div class="input-field">
                                <input id="search" type="search" required /> 
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                            </div>
                        </form> 
                    </li>
                </ul>
                </div>
                
        ````</div>
        
        </nav>

</div>
)

}

export default Navbar