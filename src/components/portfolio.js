import React from "react";
import Project from "./project";
const Portfolio = () => {
  const myProjects = [
    {
      title: "BROK(ER) EXCHANGE",
      image: require ('../images/Broker-exchange-image.png'),
      description: "Broker exchange is a community based app that would allow the exchange of good and services without money involved to help those in need that couldn’t afford the monetary expense necessary to receive help. ",
      url: "https://github.com/SBarsuhn/Broker-Exchange",
    },
    {
      title: "project 2",
      image: "put a url here",
      description: "This is a description",
      url: "put a url here",
    },
    {
      title: "project 3",
      image: "put a url here",
      description: "This is a description",
      url: "put a url here",
    },
    {
      title: "project 4",
      image: "put a url here",
      description: "This is a description",
      url: "put a url here",
    },
    {
      title: "project 5",
      image: "put a url here",
      description: "This is a description",
      url: "put a url here",
    },
    {
      title: "project 6",
      image: "put a url here",
      description: "This is a description",
      url: "put a url here",
    },
    
  ];

  return (
    <div className="card-container">
      
      {myProjects.map((project) => {
        return (
          <div>
            <Project
              title={project.title}
              image={project.image}
              description={project.description}
              url={project.url}
            ></Project>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
