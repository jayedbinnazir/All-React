import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li  ><NavLink exact to='/'   activeStyle={{fontWeight: "bold",color: "red"}}   >Home</NavLink></li>
                    <li><NavLink exact to='/about'   activeStyle={{fontWeight: "bold",color: "red"}}  >About</NavLink></li>
                    <li><NavLink exact to='/services'   activeStyle={{fontWeight: "bold",color: "red"}}  >Services</NavLink></li>
                    <li><NavLink exact to='/Posts/js/React'   activeStyle={{fontWeight: "bold",color: "red"}}  >Javascript</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;