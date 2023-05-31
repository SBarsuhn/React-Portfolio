import React from 'react';
import Nav from './nav'
import { Link } from 'react-router-dom'
// sets the html of the header
const Header = () => {
  return (
    <div className="item">
      <Link className='header-link' to = '/'>
     <h1 className='header'>SAM BARSUHN</h1>
     </Link>
     <Nav></Nav>
    </div>
  );
};

export default Header;