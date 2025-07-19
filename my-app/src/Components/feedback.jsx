import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Slider = () => {
  const feedbackData = [
    {
      imageName: "course_banner_1.png",
      feedback: "Very informative and visually appealing.",
      rating: 5
    },
    {
      imageName: "event_poster_2.png",
      feedback: "Good layout but could be more colorful.",
      rating: 4
    },
    {
      imageName: "workshop_flyer_3.png",
      feedback: "Clear design, easy to understand.",
      rating: 4
    },
    {
      imageName: "seminar_card_4.png",
      feedback: "Great use of icons and typography.",
      rating: 5
    },
    {
      imageName: "webinar_poster_5.png",
      feedback: "Looks clean but lacks creativity.",
      rating: 3
    },
    {
      imageName: "training_banner_6.png",
      feedback: "Excellent graphics and vibrant colors.",
      rating: 5
    }
  ];

  return (
    <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
      {feedbackData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content" >
            <img
              src={`./images/${item.imageName}`}
              alt={item.imageName}
            />
            {/* <p style={styles.feedback}>{item.feedback}</p>
            <p style={styles.rating}>Rating: {"⭐".repeat(item.rating)}</p> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


