import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashBtn from "../include/UnsplashBtn";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandoms] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=7q3_gZMO4lwUgeFywj-wLxCLnDs2ldqIsoZ0iPeiJu0&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      // .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=7q3_gZMO4lwUgeFywj-wLxCLnDs2ldqIsoZ0iPeiJu0&count=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      // .then((result) => console.log(result))
      .catch((error) => console.log(error));
    fetch(
      "https://api.unsplash.com/photos/random?client_id=7q3_gZMO4lwUgeFywj-wLxCLnDs2ldqIsoZ0iPeiJu0&count=10"
    )
      .then((response) => response.json())
      .then((result) => setRandoms(result))
      // .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "reference API"]} />
        <UnsplashSlider random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashBtn />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Unsplash;
