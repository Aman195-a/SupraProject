// <<<<<<< HEAD
import { Slider } from "./Components/feedback";
import { Footer } from "./Components/Footer"

export const App=()=>{
  return (
    <div className="App">

      <Footer />
      <Slider />
    </div>
  )
}

// export default App;
// =======
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Events1 from './Components/Events1';
import Course from './Components/Course'
import Footor from './Components/Footor';
function App() {
  return (
   <>
   <Header/>
   <Main/>
   <Course/>
   <Events1/>
   <Footor/>
   </>
  );
}

export default App;
// >>>>>>> 1fd8dc2423a4ef8c65f25e4a53c17e1b7d55c12b
