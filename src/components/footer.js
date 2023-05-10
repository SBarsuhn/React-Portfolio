import React from 'react';
import github from '../images/github.png'
import linkedin from '../images/linkedin-logo.png'
import twitter from '../images/twitter.png'
const Footer = () => {
  return (
    <div className="item">
      <div className='footer-cont'>
     <a target='_blank' href='https://github.com/SBarsuhn'><img className='footer-img' src={github} /></a>
     <a target='_blank' href='https://linkedin.com'><img className='footer-img' src={linkedin} /></a>
     <a target='_blank' href='https://twitter.com'><img className='footer-img' src={twitter} /></a>
    </div>
    </div>
  );
};

export default Footer;