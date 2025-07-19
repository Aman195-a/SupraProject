import React from 'react';
import CourseCard from './CourseCard';
import './CourseSection.css';

const CourseSection = () => {
  const courses = [
    {
      title: 'React for Beginners',
      description: 'Learn the basics of React, components, and state management.',
      author: 'Aman Kumar',
      duration: '4 weeks',
      price: 499,
      lessons: 20,
      image: 'https://img.freepik.com/free-vector/react-native-mobile-app-development-abstract-concept_335657-3707.jpg'
    },
    {
      title: 'Advanced JavaScript',
      description: 'Deep dive into ES6+, closures, async/await and more.',
      author: 'Ravi Sharma',
      duration: '6 weeks',
      price: 799,
      lessons: 35,
      image: 'https://img.freepik.com/free-vector/javascript-frameworks-concept_23-2148805994.jpg'
    },
    {
      title: 'UI/UX Design Principles',
      description: 'Master UI/UX basics with practical design techniques.',
      author: 'Sneha Mehra',
      duration: '3 weeks',
      price: 399,
      lessons: 15,
      image: 'https://img.freepik.com/free-vector/ux-ui-design-concept-illustration_114360-5522.jpg'
    },
  ];

  return (
    <section className="course-section">
      <h2>Premium Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
