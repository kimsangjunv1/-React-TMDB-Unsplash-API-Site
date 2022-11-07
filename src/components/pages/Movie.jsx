import React from "react";
import { useState, useEffect } from "react"; // 리액트훅 선언해줌
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MoviePopular from "../include/MoviePopular";
import MovieSearch from "../include/MovieSearch";
import Contact from "../layout/Contact";

const Movie = () => {
  // 저장소, 콜백함수()
  const [movies, setMovies] = useState([]);
  // 4번 : 콜백함수로 밑에서 처리한거 보낸 뒤 moviesPopular(저장소)로 보냄
  const [moviesPopular, setPopularMovies] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      // 2. onSearch 값을 MovieSearch로 전달 받은걸 MovieCont에 전달
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      // 1번 : 값을 가져오고
      "https://api.themoviedb.org/3/movie/popular?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1"
    )
      // 2번 : json으로 변환
      .then((response) => response.json())

      // 3번 : json으로 변환한 값에 results로 보냄
      .then((result) => setPopularMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=3d606cf9dc17d29e0dec9772c8a629e6&languages=ko-kr&query=marvel&page=1"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        {/* 5번 저장소에서 가져옴 */}
        <MoviePopular moviesPopular={moviesPopular} />
        <Title title={["movie", "reference api"]} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
