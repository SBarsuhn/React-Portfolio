import React from 'react';

const Project = (props) => {
  return (
    <div className="item">
     <h2>ProjectPAGE</h2>
     <div className='card'>
      <div>{props.title}</div>
      <div>{props.image}</div>
      <div>{props.description}</div>
      <div>{props.url}</div>
     </div>
    </div>
  );
};

export default Project;