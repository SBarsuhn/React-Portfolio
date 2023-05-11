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
      title: "Crypto Converter",
      image: require ('../images/Crypto-convert-crop.jpg'),
      description: "This project is a simple web application that will allow users to see the worth of grocery items in crypto-currency.",
      url: "https://sbarsuhn.github.io/Willy-Wonkas-Whimsical-Cryptocurrency-Converter/",
    },
    {
      title: "Weather Dashboard",
      image: require ('../images/weatherdashboardpreview.png'),
      description: "This website is a weather dashboard that will give you the current temperature and weather conditions along with a five day forcast so you can prepare for the week.",
      url: "https://sbarsuhn.github.io/Weather-Dashboard/",
    },
    {
      title: "Javascript Quiz",
      image: require ('../images/Screenshot 2023-05-11 162022.png'),
      description: "This project is a 'quiz' made with javascript. The answers are given to you so the key to getting a good score is a fast reaction time.",
      url: "https://sbarsuhn.github.io/Javascript-Quiz/",
    },
    {
      title: "README Gen",
      image: require ('../images/Screenshot 2023-05-11 162532.png'),
      description: "TThis project uses node js and inquirer to allow the user to generate a README file without having to do any of the formatting themselves.",
      url: "https://github.com/SBarsuhn/README-gen",
    },
    {
      title: "Social Network API",
      image: require ('../images/Screenshot 2023-05-11 163010.png'),
      description: "This applications works as a small scale social network. It lets users create profiles where they can post, add reactions to posts, and add other users to their friends list. ",
      url: "https://github.com/SBarsuhn/Social-Network-API",
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
