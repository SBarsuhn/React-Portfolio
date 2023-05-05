import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className="navbar">
     <ul>
       <li><Link className="navbar" to = '/'>HOME</Link></li>
       <li><Link className="navbar" to = '/portfolio'>PORTFOLIO</Link></li>
       <li><Link className="navbar" to = '/contact'>CONTACT</Link></li>
       <li><Link className="navbar" to = '/resume'>RESUME</Link></li>
     </ul>
    </div>
  );
};

export default Nav;