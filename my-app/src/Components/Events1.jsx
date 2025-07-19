import "./Events1.css";

import React from "react";

const Events1 = () => {
  return (
    <>
    
        <h1 className="service-header"> Our Services</h1>

        <div className="all-boxes">
          {allshow.map((item, index) => (
            <div className="box" key={index}>
              <h2>{item.heading}</h2>
              <p>{item.info}</p>
              <div className="img-container">
                <img src={item.img} alt={item.heading} />
              </div>
            </div>
          ))}
          ;
        </div>
      
    </>
  );
};

export default Events1;

const allshow = [
  {
    heading: "Explore Courses",
    info: "Discover expert-led courses across tech, business, design, and more.",
    img: "/Image1.jpg",
  },

  {
    heading: "Find Events",
    info: "Attend webinars, workshops, and expos happening near you or online.",
    img: "/Image2.jpg",
  },

  {
    heading: "Make Network",
    info: "Connect with professionals and grow your industry network.",
    img: "/Image3.jpg",
  },
];
