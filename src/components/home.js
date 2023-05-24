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
      <div className='about'>This is the part that would have the about me section. fornow just pretend that this rambling, run on sentence is a detailed description of my capabilities in coding and web developement. If I had anything interesting to put here I would but for now I am just trying to get a paragraph written down so I can turn in this assignment. In the future I plan to add to this to show employers but for now this will have to do. If you are still reading this please stop. There is nothing intersting to read here. Alright that hsould be enough text to style to get the idea across of what this would look like if I had anything to actually out in this about me section</div>
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