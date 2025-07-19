import "./Detailed.css"
export const Detailed=()=>{
    return(
        <>
        <section className="detail-container">

            {alldetail.map((item,index)=>(
                <div className="boxes">
                    <h3>{item.heading}</h3>

                    <div className="side-by-side">
                        <img src={item.image}alt={item.title} />
                        <p>{item.description}</p>
                    </div>
                    <button className="btn">{item.btnText} →</button>
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
    btnText: "Get Started"
  },
  
  {
    heading: "Know about the Events",
    title:"Upcoming Events",
    description: "Explore top-rated courses and events designed to power your career in tech.",
    image: "/upcomin.jpg",
    btnText: "Explore Event"
  },

 
];
