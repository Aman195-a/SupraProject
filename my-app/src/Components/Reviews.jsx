import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Reviews.css";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


const Allreview = [
  {
    name: "Emily Carter",
    rating: "⭐⭐⭐⭐⭐",
    experience: "EduEvent made learning so engaging! The course content was interactive and easy to follow.",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Liam Anderson",
    rating: "⭐⭐⭐⭐",
    experience: "The platform is smooth and well-structured. I learned a lot from the live classes!",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sofia Müller",
    rating: "⭐⭐⭐⭐⭐",
    experience: "I love the quality of instructors. The EduEvent courses exceeded my expectations!",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mateo Rossi",
    rating: "⭐⭐⭐",
    experience: "Good platform, but I’d love to see more advanced-level courses added soon.",
    img: "https://randomuser.me/api/portraits/men/58.jpg"
  },
  {
    name: "Chloe Dubois",
    rating: "⭐⭐⭐⭐",
    experience: "Well-organized modules and affordable pricing. Perfect for career growth.",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Noah Jensen",
    rating: "⭐⭐⭐⭐⭐",
    experience: "EduEvent is the best online learning app I've tried! Great balance of theory and practice.",
    img: "https://randomuser.me/api/portraits/men/77.jpg"
  },
  {
    name: "Isabella Fernández",
    rating: "⭐⭐⭐⭐",
    experience: "I enjoyed the interactive quizzes and real-time support during the courses.",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "James Wilson",
    rating: "⭐⭐⭐",
    experience: "The content is good, but some videos could be more detailed.",
    img: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    name: "Anna Kowalski",
    rating: "⭐⭐⭐⭐⭐",
    experience: "Absolutely loved the learning experience! The platform is easy and fun to use.",
    img: "https://randomuser.me/api/portraits/women/36.jpg"
  }
];

export const Review = () => {
  

  return (
           <>
    <div className="review-heading">
         <h1> Experience With Us</h1>
          
    </div>


    <section className= "light-reviewbox">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
      >
        {Allreview.map((item, index) => (
          <SwiperSlide className="boxe-slide" key={index}>
            <div className= "light-card" >
              <div className="img-card">
                <img src={item.img} alt="review" />
                <h3>{item.name}</h3>
                <h4>Rating: {item.rating}</h4>
                <h3>Experience</h3>
                <p>{item.experience}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </>
  );
};