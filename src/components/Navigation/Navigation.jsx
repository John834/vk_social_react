import React from 'react';
import nav from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () =>{
  return (
    <nav className={nav.Navigation}>
      <ul>
        <li><NavLink className={nav.link} to="/Profile">My profile</NavLink></li>
        <li><NavLink className={nav.link} to="/News">News</NavLink></li>
        <li><NavLink className={nav.link} to="Message">Messenger</NavLink></li>
        <li><NavLink className={nav.link} to="#">Frineds</NavLink></li>
      </ul>
    </nav>
  )
}


export default Navigation;