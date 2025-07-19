import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Events1 from './Components/Events1';
import Course from './Components/Course'
import {Footer} from './Components/Footer';
import { Review } from './Components/Reviews';
import CourseSection from './Components/CourseSection';


function App() {
  return (
    
   <>
   <Header/>
   <Main/>
   <Course/>
   <CourseSection/>
   <Events1/>
   <Review />
   <Footer/>
   
   </>
  );
}

export default App;
