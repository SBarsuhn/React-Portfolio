import React from 'react';
import avatar from '../images/avatar.png'
const Home = () => {
  // sets the html of the homepage
  return (
    <div className="item">
      <div>
     <a target='blank' href='https://github.com/SBarsuhn'><img className='avatar' src={avatar} alt='avatar' /></a>
     <div className='card-container'>
     <div className='about-card'>
      <div className='about'>I have been interested in coding for as long as I can remember although it was just recently that I decided to put in the work to actually learn how to do it. Since that day I have fallen in love with coding and despite many moments of frustration I have continued to enjoy the learning experience and I plan to continue to expand my knowledge. Currently I work in the service industry but I hope to break into web developement in the coming months as I continue to enhance my skills.</div>
      <h2>Technical Skills</h2>
      <div>
        JavaScript, 
        TypeScript, 
        JQuery, 
        Node, 
        React, 
        Handlebars, 
        MySQL, 
        MongoDB, 
        Progressive Web Apps, 
        CSS, 
        HTML,
        Bootstrap
      </div>
     </div>
    </div>
    </div>
    </div>
  );
};

export default Home;