import "./Detailed.css"
import { NavLink } from "react-router-dom";
export const Detailed=()=>{
    return(
        <>
        <section className="detail-container" id="course">

            {alldetail.map((item,index)=>(
                <div className="boxes">
                    <h3>{item.heading}</h3>

                    <div className="side-by-side">
                        <img src={item.image}alt={item.title} />
                        <p>{item.description}</p>
                    </div>
                    <button className="btn"><NavLink to ={item.path}>{item.btnText} →</NavLink></button>
                </div>
            ))}
        </section>
        
        
        
        
        
        </>
    )
}

const alldetail = [
 
  {
    heading: "Fuel Your Passion for Learning",
    title:"Explore Courses",
    description: "Explore top-rated courses and events designed to power your career in tech.",
    image: "/explore.jpg",
    btnText: "Get Started",
     path: "/courses"
  },
  
  {
    heading: "Know about the Events",
    title:"Upcoming Events",
    description: "Explore top-rated courses and events designed to power your career in tech.",
    image: "/upcomin.jpg",
    btnText: "Explore Event",
       path: "/events"
  },

 
];
