import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Events1 from './Components/Events1';
import Course from './Components/Course'
import {Footer} from './Components/Footer';
import { Review } from './Components/Reviews';
import { Detailed } from './Components/Detailed';




function App() {
  return (
   <>
   <Header/>
   <Main/>
 
   <Events1/>
   <Detailed />
   <Review />
   <Footer/>
   </>
  );
}

export default App;
