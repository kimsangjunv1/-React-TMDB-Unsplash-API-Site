import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

//데이터 적기

const YoutubeItem = ({ image }) => {
  return (
    <li>
      <a href={`https://api.Youtube.com/photos${image.snippet.channelId}`}>
        <img src={image.snippet.thumbnails.medium.url} alt={image.snippet.description} />
      </a>
    </li>
  );
};

const YoutubeSlider = ({youtubeSlider}) => {
  return (
    <section className="cont__Youtube">
      <div className="container">
        <div className="Youtube__inner">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
          {youtubeSlider.map((image, index) => (
            <SwiperSlide>
              <YoutubeItem key={index} image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default YoutubeSlider