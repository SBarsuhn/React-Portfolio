import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className="item">
     <ul>
       <li><Link to = '/'>HOME</Link></li>
       <li><Link to = '/portfolio'>PORTFOLIO</Link></li>
       <li><Link to = '/contact'>CONTACT</Link></li>
       <li><Link to = '/resume'>RESUME</Link></li>
     </ul>
    </div>
  );
};

export default Nav;