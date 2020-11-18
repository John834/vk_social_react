import React from 'react';
import nav from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { HomeSvg, News, Message, Frineds, Home } from './../../iconComponent/home.jsx';

const Navigation = () =>{
  return (
    <nav className={nav.Navigation}>
      <ul>
        <li>
          <HomeSvg />
          <NavLink className={nav.link} to="/Profile">My profile</NavLink>
        </li>
        <li>
          <News />
          <NavLink className={nav.link} to="/News">News</NavLink>
        </li>
        <li>
          <Message />
          <NavLink className={nav.link} to="Message">Messenger</NavLink>
        </li>
        <li>
          <Frineds />
          <NavLink className={nav.link} to="Friend">Friends</NavLink>
          </li>
      </ul>
    </nav>
  )
}


export default Navigation;