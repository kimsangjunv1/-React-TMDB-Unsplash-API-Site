import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function MoviePopularItem(props) {
  return (
    <>
      <li>
        <a href={`https://www.themoviedb.org/movie/${props.moviesPopular.id}`}>
          {/* <img src="" alt="" /> */}
          <img
            src={`https://image.tmdb.org/t/p/w500${props.moviesPopular.poster_path}`}
            alt={props.original_title}
          />
          <div className="movie__desc">
            <span className="title">
              {props.moviesPopular.original_language}
            </span>
            <span className="star">{props.moviesPopular.vote_average}</span>
          </div>
        </a>
      </li>
    </>
  );
}

// 6번 : 매개변수에 담긴 값을 가져옴
function MoviePopular(props) {
  console.log(props.moviesPopular);
  return (
    <section className="cont__popular__movie">
      {/* <div className="container"> */}
      <h1>Popular Movies</h1>
      <div className="movie__popular_inner">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {props.moviesPopular.map((moviesPopular, index) => (
            <SwiperSlide>
              <MoviePopularItem key={index} moviesPopular={moviesPopular} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div>2</div>
          </SwiperSlide>
        </Swiper>
        {/* <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          className="mySwiper"
        >
          <ul>
            {props.moviesPopular.map((moviesPopular, index) => (
              <SwiperSlide>
                <MoviePopularItem key={index} moviesPopular={moviesPopular} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper> */}
      </div>
    </section>
  );
}

export default MoviePopular;
