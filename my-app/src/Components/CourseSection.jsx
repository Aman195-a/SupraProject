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
  {
    title: 'Python for Data Science',
    description: 'Hands-on with NumPy, pandas, matplotlib, and scikit-learn.',
    author: 'Ritika Bansal',
    duration: '5 weeks',
    price: 699,
    lessons: 28,
    image: 'https://img.freepik.com/free-vector/data-analysis-concept_23-2148482465.jpg'
  },
  {
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, SEM, email and content marketing from scratch.',
    author: 'Vikas Verma',
    duration: '6 weeks',
    price: 899,
    lessons: 30,
    image: 'https://img.freepik.com/free-vector/marketing-strategy-concept_23-2148517993.jpg'
  },
  {
    title: 'Machine Learning Basics',
    description: 'Supervised, unsupervised learning and model evaluation.',
    author: 'Anjali Gupta',
    duration: '5 weeks',
    price: 999,
    lessons: 25,
    image: 'https://img.freepik.com/free-vector/machine-learning-concept_23-2148684981.jpg'
  },
  {
    title: 'Next.js & Modern Web Dev',
    description: 'Fullstack app development using React and Next.js.',
    author: 'Dev Raj',
    duration: '4 weeks',
    price: 599,
    lessons: 18,
    image: 'https://img.freepik.com/free-vector/web-developer-illustration_23-2148819604.jpg'
  },
  {
    title: 'Fullstack with MERN',
    description: 'MongoDB, Express, React, and Node.js full course.',
    author: 'Neha Sinha',
    duration: '8 weeks',
    price: 1099,
    lessons: 40,
    image: 'https://img.freepik.com/free-vector/development-concept-with-programmer-flat-design_23-2147850084.jpg'
  },
  {
    title: 'Graphic Design Essentials',
    description: 'Color theory, typography, and layout for creatives.',
    author: 'Suman Thakur',
    duration: '3 weeks',
    price: 349,
    lessons: 12,
    image: 'https://img.freepik.com/free-vector/graphic-design-software-user-interface_23-2149052021.jpg'
  },
  {
    title: 'WordPress Website Creation',
    description: 'Build dynamic websites using Elementor and plugins.',
    author: 'Priya Raut',
    duration: '2 weeks',
    price: 299,
    lessons: 10,
    image: 'https://img.freepik.com/free-vector/web-hosting-concept_23-2148684980.jpg'
  },
  {
    title: 'Cyber Security Basics',
    description: 'Learn about firewalls, networks, and ethical hacking.',
    author: 'Harshit Mathur',
    duration: '6 weeks',
    price: 899,
    lessons: 32,
    image: 'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg'
  },
  {
    title: 'C++ Programming Fundamentals',
    description: 'C++ syntax, pointers, OOPs, STL and algorithms.',
    author: 'Kiran Rao',
    duration: '4 weeks',
    price: 459,
    lessons: 22,
    image: 'https://img.freepik.com/free-vector/abstract-programmer-concept_23-2148266413.jpg'
  },
  {
    title: 'Django for Web Apps',
    description: 'Learn Django, views, models, admin and APIs.',
    author: 'Mayank Kapoor',
    duration: '5 weeks',
    price: 699,
    lessons: 24,
    image: 'https://img.freepik.com/free-vector/software-developer-coding-website_23-2148819601.jpg'
  },
  {
    title: 'Android App Dev with Kotlin',
    description: 'Create Android apps with Kotlin, UI, and Firebase.',
    author: 'Sanya Bhatt',
    duration: '7 weeks',
    price: 899,
    lessons: 30,
    image: 'https://img.freepik.com/free-vector/app-development-concept_23-2148684982.jpg'
  },
  {
    title: 'Intro to Blockchain',
    description: 'Get started with Ethereum, wallets and smart contracts.',
    author: 'Rohit Jain',
    duration: '4 weeks',
    price: 799,
    lessons: 20,
    image: 'https://img.freepik.com/free-vector/cryptocurrency-blockchain-technology-isometric_23-2148870207.jpg'
  },
  {
    title: 'Excel for Beginners',
    description: 'Formulas, charts, pivot tables, and business usage.',
    author: 'Tina Verma',
    duration: '2 weeks',
    price: 249,
    lessons: 8,
    image: 'https://img.freepik.com/free-vector/business-finance-concept_23-2148806460.jpg'
  },
  {
    title: 'Photoshop Crash Course',
    description: 'Photo editing, retouching and UI mockups.',
    author: 'Anuj Rawat',
    duration: '3 weeks',
    price: 399,
    lessons: 14,
    image: 'https://img.freepik.com/free-vector/photoshop-illustration-concept_23-2148791395.jpg'
  },
  {
    title: 'Prompt Engineering with AI',
    description: 'Craft better prompts for ChatGPT, DALL·E and LLMs.',
    author: 'Diya Nair',
    duration: '2 weeks',
    price: 349,
    lessons: 9,
    image: 'https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-127739.jpg'
  },
  {
    title: 'DevOps and CI/CD',
    description: 'GitHub Actions, Docker, Jenkins and pipelines.',
    author: 'Akshay Rana',
    duration: '5 weeks',
    price: 949,
    lessons: 26,
    image: 'https://img.freepik.com/free-vector/devops-concept-illustration_23-2149398495.jpg'
  },
  {
    title: 'Ethical Hacking 101',
    description: 'Network sniffing, Kali Linux, phishing and defense.',
    author: 'Reena Dey',
    duration: '6 weeks',
    price: 999,
    lessons: 30,
    image: 'https://img.freepik.com/free-vector/hacker-breaking-password-computer_74855-5722.jpg'
  }
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
