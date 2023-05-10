import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom'
const Nav = () => {
  let location = useLocation()
  console.log(location)
  return (
    <div className="navbar">
     <ul>
       <li><NavLink className={location.pathname === "/" ? "highlight" : "navbar"} to = '/'>ABOUT ME</NavLink></li>
       <li><NavLink className={location.pathname === "/portfolio" ? "highlight" : "navbar"} to = '/portfolio'>PORTFOLIO</NavLink></li>
       <li><NavLink className={location.pathname === "/contact" ? "highlight" : "navbar"} to = '/contact'>CONTACT</NavLink></li>
       <li><NavLink className={location.pathname === "/resume" ? "highlight" : "navbar"} to = '/resume'>RESUME</NavLink></li>
     </ul>
    </div>
  );
};

export default Nav;