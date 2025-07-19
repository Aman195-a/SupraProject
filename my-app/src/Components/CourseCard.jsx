import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, author, duration, price, lessons, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-img" />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <div className="details">
          <p><strong>Instructor:</strong> {author}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Lessons:</strong> {lessons}</p>
          <p><strong>Price:</strong> ₹{price}</p>
        </div>
        <button className="view-btn">View Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
