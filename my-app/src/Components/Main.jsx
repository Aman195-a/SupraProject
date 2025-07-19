import React from 'react';
import './Main.css';

import Img1 from './img1.png'; 
import Img2 from './img2.png'; 
import Img3 from "./img3.png"
import Img4 from "./img4.png"

const Main = () => {
  return (
    <main className="main-section" id='home'>
      <div className="main-content">
        <h1 className="heading" >Discover Courses and Events</h1>
        <p>Explore a variety of courses and find events that match your interests.</p>
        <button className="explore-btn">Explore</button>
      </div>

      <div className="main-graphics">
        <img src={Img1} alt="Top Left" className="graphic-img top-left" />
        <img src={Img2} alt="Top Right" className="graphic-img top-right" />
        <img src={Img3} alt="Bottom Left" className="graphic-img bottom-left" />
        <img src={Img4} alt="Bottom Right" className="graphic-img bottom-right" />
      </div>
    </main>
  );
};

export default Main;
