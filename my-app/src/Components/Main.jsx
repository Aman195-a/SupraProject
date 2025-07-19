// <<<<<<< HEAD
import React from 'react'
import { App } from '../App'

import React from 'react';
import './Main.css';

import Img1 from './Img1.png'; // Top-left
import Img2 from './Img2.png'; // Top-right
import Img3 from './Img3.png'; // Bottom-left
// >>>>>>> 1fd8dc2423a4ef8c65f25e4a53c17e1b7d55c12b

const Main = () => {
  return (
    <main className="main-section">
      <div className="main-content">
        <h1>Discover Courses and Events</h1>
        <p>Explore a variety of courses and find events that match your interests.</p>
        <button className="explore-btn">Explore</button>
      </div>

      <div className="main-graphics">
        <img src={Img1} alt="Top Left" className="graphic-img top-left" />
        <img src={Img2} alt="Top Right" className="graphic-img top-right" />
        <img src={Img3} alt="Bottom Left" className="graphic-img bottom-left" />
        <img src={Img1} alt="Bottom Right" className="graphic-img bottom-right" />
      </div>
    </main>
  );
};

export default Main;
