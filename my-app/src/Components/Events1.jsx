import "./Events1.css";

import React from "react";

const Events1 = () => {
  return (
    <>
    
        <h1> Our Services</h1>

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
    info: "choose from hundreds of online courses covering a variety of topics",
    img: "/Image1.jpg",
  },

  {
    heading: "Find Events",
    info: "choose from hundreds of online courses covering a variety of topics",
    img: "/Image2.jpg",
  },

  {
    heading: "Make Network",
    info: "choose from hundreds of online courses covering a variety of topics",
    img: "/Image3.jpg",
  },
];
