import React from 'react'
import he from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={he.header}>
    	<div className={he.loginBlock}>
    	{ props.isAuth 
    		? <div>{props.login} - <button onClick={props.Logout}>logout</button></div>
    		: <NavLink to={'/login'}>Login</NavLink>
   		}
    	</div>
    </header>
  )
}

export default Header;