import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const UnsplashItem = ({ image }) => {
  return (
    <li>
      <a href={`https://api.unsplash.com/photos${image.id}`}>
        <img src={image.urls.regular} alt={image.urls.alt_description} />
      </a>
    </li>
  );
};

const UnsplashSlider = ({random}) => {
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">

        <Swiper
        pagination={{
          type: "progressbar",
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        }}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        a
      >
          {random.map((image, index) => (
            <SwiperSlide>
              <UnsplashItem key={index} image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default UnsplashSlider