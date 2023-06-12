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
      <div className='about'>
      I am a recent graduate of the University of Minnesota's coding bootcamp. 
      I greatly enjoyed the intensive  learning experience and plan to continue expanding my technical skills and knowledge. 
      Prior to my coding experience and education, I spent a year working in the Minnesota Conservation Corps, which involved everything from the removal of invasive plant species to tree felling to wildland firefighting. 
      Currently I work in the service industry as an assistant manager. I am ready to grow in my web development abilities and enhance my skills, I wish to join a positive and supportive team where I can work hard, gain experience and contribute to shared goals.</div>
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