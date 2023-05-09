import React from 'react';

const Project = (props) => {
  return (
    <div className="item">
      <div className='cards-cont'>
     <div className='card'>
      <div className='card-title'>{props.title}</div>
      <img src={props.image} className='card-image' />
      <div className='card-desc'>{props.description}</div>
      <a target="blank" href={props.url} className='card-url'>
      <button className='site-but'>VISIT SITE</button>
      </a>
     </div>
    </div>
    </div>
  );
};

export default Project;