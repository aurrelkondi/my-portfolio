import React from "react";
import "./testimonials.scss";
import AVTR1 from "../../assets/AVRT-1.jpg";
import AVTR2 from "../../assets/AVRT-2.jpg";
import AVTR3 from "../../assets/AVRT-3.jpg";
import AVTR4 from "../../assets/AVRT-4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsum!",
  },
  {
    avatar: AVTR2,
    name: "Tina",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsum!",
  },
  {
    avatar: AVTR3,
    name: "Tina",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsum!",
  },
  {
    avatar: AVTR4,
    name: "Tina",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsum!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
