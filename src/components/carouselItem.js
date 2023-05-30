import React from "react";
export const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <div></div>
      <img src={item.image} className="carousel-image" />
      <div className="carousel-title">{item.title}</div>
      <div className="carousel-desc">{item.description}</div>
      <a target="blank" href={item.url} className="carousel-url">
        <button className="site-but">VISIT SITE</button>
      </a>
    </div>
  );
};
