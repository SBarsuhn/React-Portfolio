import React from 'react';

const Project = (props) => {
  return (
    <div className="item">
      <div className='cards-cont'>
     <div className='card'>
      <div className='card-title'>{props.title}</div>
      <div className='card-image'>{props.image}</div>
      <div className='card-desc'>{props.description}</div>
      <div className='card-url'>{props.url}</div>
      <button className='site-but'>VISIT SITE</button>
     </div>
    </div>
    </div>
  );
};

export default Project;