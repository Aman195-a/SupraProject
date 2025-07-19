import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Events1 from './Components/Events1';
import Course from './Components/Course';
import { Footer } from './Components/Footer';
import { Review } from './Components/Reviews';
import CourseSection from './Components/CourseSection';
import { Detailed } from './Components/Detailed';
import SignIn from './Components/SignIn';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <Main />
            <Course />
            <CourseSection />
            <Events1 />
            <Detailed />
            <Review />
            <Footer />
          </>
        } />

        {/* SignIn Page Route */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
