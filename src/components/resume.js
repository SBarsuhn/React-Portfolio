import React from 'react';
import image from '../images/Rectangle@2x-2-3.png'
// sets the html of the resume page
const Resume = () => {
  return (
    <div className='center'>
    <div className="item, res-cont">
      <div>
      <img className='resume' src={image} alt='resume' />
    </div>
      <a href={image} download><button className='download'>DOWNLOAD</button></a>
    </div>
    </div>
  );
};

export default Resume;