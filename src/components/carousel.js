import React ,{ useEffect, useState } from "react";
import { CarouselItem } from "./carouselItem";

// import { isButtonElement, isHtmlElement } from "react-router-dom/dist/dom";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const myProjects = [
    {
      title: "Bontatics",
      image: require("../images/bonatics.png"),
      description:
        "Bonatics for all plant enthusiasts who want to trade plants or discover new plants to add to their collection. We want to create an online marketplace, similar to Etsy or Ebay to offer an alternative way of selling live plants.",
      url: "https://github.com/SBarsuhn/Broker-Exchange",
    },
    {
      title: "BROK(ER) EXCHANGE",
      image: require("../images/bonatics.png"),
      description:
        "Broker exchange is a community based app that would allow the exchange of good and services without money involved to help those in need that couldn’t afford the monetary expense necessary to receive help. ",
      url: "https://github.com/SBarsuhn/Broker-Exchange",
    },
    {
      title: "Crypto Converter",
      image: require("../images/bonatics.png"),
      description:
        "This project is a simple web application that will allow users to see the worth of grocery items in crypto-currency. Simply type in a gorcery item to see its current coversion to some of the most popular crypto currencies",
      url: "https://sbarsuhn.github.io/Willy-Wonkas-Whimsical-Cryptocurrency-Converter/",
    },
    {
      title: "Weather Dashboard",
      image: require("../images/bonatics.png"),
      description:
        "This website is a weather dashboard that will give you the current temperature and weather conditions along with a five day forcast so you can prepare for the week. It also saves your recent searches for convenience",
      url: "https://sbarsuhn.github.io/Weather-Dashboard/",
    },
    {
      title: "Javascript Quiz",
      image: require("../images/bonatics.png"),
      description:
        "This project is a 'quiz' made with javascript. The buttons will tell you what the correct answer is so the key to getting a good score is accuracy and a quick reaction time.",
      url: "https://sbarsuhn.github.io/Javascript-Quiz/",
    },
    {
      title: "Social Network API",
      image: require("../images/bonatics.png"),
      description:
        "This applications works as a small scale social network. It lets users create profiles where they can post, add reactions to posts, and add other users to their friends list. ",
      url: "https://github.com/SBarsuhn/Social-Network-API",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= myProjects.length) {
      newIndex = myProjects.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
        <div className="inner"
            style={{transform: `translate(-${activeIndex * 100}%)`}}
            >
            {myProjects.map((item) => {
                return <CarouselItem item={item} width={"100%"} />
            })}
        </div>
        <div className="carousel-buttons">
          <button 
          onClick={() =>{
            updateIndex(activeIndex - 1)
          }} className="button-arrow">
            <span class="material-symbols-outlined">
arrow_back_ios
</span>
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"></path></svg> */}
            </button>
          <div className="indicators">
            {myProjects.map((item,index)=> {
              return <button
              onClick={() =>{
                updateIndex(index)
              }} className="indicator-buttons">
                {/* <svg className={`${index===activeIndex? 'indicator-symbol-active': 'indicator-symbol'}`} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path><path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path></svg> */}
                <span className={`material-symbols-outlined ${index===activeIndex? 'indicator-symbol-active': 'indicator-symbol'}`}>
radio_button_checked
</span>
                </button>
            })}
            </div>
          <button onClick={() =>{
            updateIndex(activeIndex + 1)
          }}className="button-arrow">
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg> */}
            <span class="material-symbols-outlined">
arrow_forward_ios
</span>
            </button>
        </div>
    </div>
  );
};
