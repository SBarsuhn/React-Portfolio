import React from 'react';
import image from '../images/Rectangle@2x-2-3.png'
// sets the html of the resume page
const Resume = () => {
  return (
    <div className="item">
      <a href={image} download><button className='download'>DOWNLOAD</button></a>
      <div className='res-cont'>
      <img className='resume' src={image} alt='resume' />
    </div>
      <span>This is just an example. When I have an actual resume I will replace this one</span>
    </div>
  );
};

export default Resume;