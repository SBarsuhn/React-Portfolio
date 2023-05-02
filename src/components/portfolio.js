import React from 'react';
import Project from './project'
const Portfolio = () => {
const myProjects = [
  {
    title: 'project 1',
    image: 'put a url here',
    description: 'This is a description',
    url: 'put a url here'

  },
  {
    title: 'project 2',
    image: 'put a url here',
    description: 'This is a description',
    url: 'put a url here'

  },
  {
    title: 'project 3',
    image: 'put a url here',
    description: 'This is a description',
    url: 'put a url here'

  },
]



  return (
    <div className="item">
     <h2>PortfolioPAGE</h2>
     {
      myProjects.map((project) => {
        return (
          <div>
            <Project title= {project.title} image={project.image} description={project.descripton} url={project.url}></Project>
          </div>
        )
      })
     }
    </div>
  );
};

export default Portfolio;