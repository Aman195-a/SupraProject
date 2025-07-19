import "./CoursesEvent.css"
export const CoursesEvent=()=>{
    return(
        <>
        
 <section className="event-container">

    
{allEvents.map((item,index)=>(
    <div className="card-box">
        <div className="type-event">
            <h5 className="type-text">📢{item.type}</h5>
            <p>🗓️ {item.date}</p>
        </div>
        <h3>{item.title}</h3>
        <div className="time-location">
            <h4>🌐
{item.location}</h4>
            <p>🕒 {item.time}</p>
        </div>
        <div className="btn-box">
        <button>Join Now</button>
        </div>

    </div>
))}

        </section>
        
        
        
        </>
    )
}


const allEvents=
    [
  {
    "title": "AI for Healthcare Webinar",
    "date": "2025-08-05",
    "time": "10:00 AM",
    "location": "Online",
    "type": "webinar",
    "description": "Explore the latest in AI for medical diagnostics."
  },
  {
    "title": "Digital Marketing Trends 2025",
    "date": "2025-08-07",
    "time": "3:00 PM",
    "location": "Online",
    "type": "webinar",
    "description": "Stay ahead with new marketing tools and insights."
  },
  {
    "title": "Remote Team Management Essentials",
    "date": "2025-08-11",
    "time": "1:00 PM",
    "location": "Online",
    "type": "webinar",
    "description": "Learn how to lead and manage virtual teams."
  },
  {
    "title": "Sustainable Tech Expo",
    "date": "2025-08-12",
    "time": "9:00 AM",
    "location": "San Francisco, CA",
    "type": "expo",
    "description": "Explore clean energy startups and tech."
  },
  {
    "title": "Global Travel Expo 2025",
    "date": "2025-08-18",
    "time": "10:00 AM",
    "location": "Orlando, FL",
    "type": "expo",
    "description": "Worldwide destinations and travel packages."
  },
  {
    "title": "Green Living Expo",
    "date": "2025-08-25",
    "time": "11:00 AM",
    "location": "Portland, OR",
    "type": "expo",
    "description": "Everything eco-friendly under one roof."
  },
  {
    "title": "Cybersecurity Basics Workshop",
    "date": "2025-08-08",
    "time": "2:00 PM",
    "location": "Austin, TX",
    "type": "workshop",
    "description": "Hands-on security training for beginners."
  },
  {
    "title": "Photography Masterclass",
    "date": "2025-08-09",
    "time": "10:00 AM",
    "location": "Chicago, IL",
    "type": "workshop",
    "description": "Learn professional photography techniques."
  },
  {
    "title": "3D Printing for Creators",
    "date": "2025-08-19",
    "time": "1:00 PM",
    "location": "Seattle, WA",
    "type": "workshop",
    "description": "Build and design with 3D printers."
  },
  {
    "title": "Tech Innovators Conference",
    "date": "2025-08-14",
    "time": "10:00 AM",
    "location": "New York, NY",
    "type": "conference",
    "description": "Panel discussions and keynotes by industry leaders."
  },
  {
    "title": "Women in AI Summit",
    "date": "2025-08-20",
    "time": "9:00 AM",
    "location": "San Diego, CA",
    "type": "conference",
    "description": "Empowering voices in artificial intelligence."
  },
  {
    "title": "Future of Fintech Conference",
    "date": "2025-08-26",
    "time": "10:00 AM",
    "location": "Boston, MA",
    "type": "conference",
    "description": "Finance and tech converge in this leading event."
  },
  {
    "title": "Startup Founder Meetup",
    "date": "2025-08-06",
    "time": "5:00 PM",
    "location": "Los Angeles, CA",
    "type": "meetup",
    "description": "Connect with fellow startup founders and investors."
  },
  {
    "title": "AI Enthusiasts Meetup",
    "date": "2025-08-10",
    "time": "6:00 PM",
    "location": "Austin, TX",
    "type": "meetup",
    "description": "Open discussion on AI trends and tools."
  },
  {
    "title": "Indie Dev Networking Night",
    "date": "2025-08-15",
    "time": "7:00 PM",
    "location": "San Jose, CA",
    "type": "meetup",
    "description": "Independent game developers sharing ideas."
  },
  {
    "title": "Leadership Coaching Workshop",
    "date": "2025-08-16",
    "time": "2:00 PM",
    "location": "Atlanta, GA",
    "type": "workshop",
    "description": "Practical coaching skills for managers."
  },
  {
    "title": "UX/UI Design Trends",
    "date": "2025-08-17",
    "time": "1:00 PM",
    "location": "Online",
    "type": "webinar",
    "description": "Latest trends in user interface design."
  },
  {
    "title": "Blockchain Expo 2025",
    "date": "2025-08-22",
    "time": "9:00 AM",
    "location": "Las Vegas, NV",
    "type": "expo",
    "description": "Decentralized tech and blockchain solutions."
  },
  {
    "title": "Startup Legal Basics",
    "date": "2025-08-23",
    "time": "12:00 PM",
    "location": "Online",
    "type": "webinar",
    "description": "Understand the legal side of launching a startup."
  },
  {
    "title": "Robotics Innovation Summit",
    "date": "2025-08-27",
    "time": "10:00 AM",
    "location": "Palo Alto, CA",
    "type": "conference",
    "description": "The future of robotics and automation."
  },
  {
    "title": "Investor Pitch Workshop",
    "date": "2025-08-28",
    "time": "3:00 PM",
    "location": "Denver, CO",
    "type": "workshop",
    "description": "Refine your pitch with VC feedback."
  },
  {
    "title": "Game Art Expo",
    "date": "2025-08-29",
    "time": "11:00 AM",
    "location": "Seattle, WA",
    "type": "expo",
    "description": "Visual art and design in gaming."
  },
  {
    "title": "Product Manager Meetup",
    "date": "2025-08-30",
    "time": "6:00 PM",
    "location": "Chicago, IL",
    "type": "meetup",
    "description": "Discuss roadmaps, tools, and team management."
  },
  {
    "title": "Python Coding Bootcamp",
    "date": "2025-09-01",
    "time": "10:00 AM",
    "location": "Philadelphia, PA",
    "type": "workshop",
    "description": "Full-day Python fundamentals bootcamp."
  },
  {
    "title": "Future Cities Expo",
    "date": "2025-09-02",
    "time": "9:00 AM",
    "location": "Los Angeles, CA",
    "type": "expo",
    "description": "Smart cities and urban tech innovations."
  },
  {
    "title": "Remote Work Strategies",
    "date": "2025-09-03",
    "time": "2:00 PM",
    "location": "Online",
    "type": "webinar",
    "description": "Tools and practices for distributed teams."
  },
  {
    "title": "Creative Coding Meetup",
    "date": "2025-09-04",
    "time": "6:00 PM",
    "location": "Brooklyn, NY",
    "type": "meetup",
    "description": "Blending art and code in fun projects."
  },
  {
    "title": "E-Commerce Growth Conference",
    "date": "2025-09-05",
    "time": "10:00 AM",
    "location": "Miami, FL",
    "type": "conference",
    "description": "Scale your online business globally."
  },
  {
    "title": "Design Thinking Workshop",
    "date": "2025-09-06",
    "time": "1:00 PM",
    "location": "Houston, TX",
    "type": "workshop",
    "description": "Boost creativity with design thinking."
  },
  {
    "title": "SaaS Industry Meetup",
    "date": "2025-09-07",
    "time": "4:00 PM",
    "location": "San Francisco, CA",
    "type": "meetup",
    "description": "Connect with SaaS builders and users."
  }
]

