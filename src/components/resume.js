import React from 'react';
import resume from '../../src/Resume.pdf'
import image from '../images/resume/Resume1024_1.png'

// sets the html of the resume page
const Resume = () => {
  return (
    <div className='center'>
    <div className="item, res-cont">
      <div>
      <img className='resume' src={image} alt='resume' />
    </div>
      <a targe='blank' href={resume} download><button className='download'>DOWNLOAD</button></a>
    </div>
    </div>
  );
};

export default Resume;