import React from 'react'
import people from "../../assets/data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay, Navigation } from "swiper/modules";
import './Reviews.css'


export default function Reviews() {
    const swiperRef = React.useRef(null); // Swiper reference

    return (
      <article className="review">
        <Swiper
          ref={swiperRef} // Attach Swiper instance to reference
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Navigation]} // Include Autoplay & Navigation
          className="mySwiper"
          /*autoplay={{
            delay: 3000, // Delay between auto slides (in ms)
            disableOnInteraction: false, // Continue autoplay after interaction
          }}*/
          navigation={false} // We'll handle navigation manually
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="img-container">
                <img
                  src={person.image}
                  alt={person.name}
                  className="person-img"
                />
                <span className="quote-icon">
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className="author">{person.name}</h4>
              <p className="job">{person.job}</p>
              <p className="info">{person.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* Buttons for manual navigation */}
        <div className="button-container">
          <button
            className="prev-btn"
            onClick={() => swiperRef.current.swiper.slidePrev()} // Go to previous slide
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => swiperRef.current.swiper.slideNext()} // Go to next slide
          >
            <FaChevronRight />
          </button>
        </div>
      </article>
    );
}
