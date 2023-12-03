import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeBtn from "../include/YoutubeBtn";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeCont from "../include/YoutubeCont";
// import AboutCont from "../include/AboutCont";
import Contact from "../layout/Contact";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const [youtubeSlider, setYoutubeSlider] = useState([]);

  const search = async (query) => {
    await fetch(
      // `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAp7wwVT_hzfA2mSXrrh-1ZUx7QCX3ogtk&part=snippet&maxResults=10&type=video&q=${query}`
      `https://raw.githubusercontent.com/younghwan12/reactapi/main/src/utils/youtube.json`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      // .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      // "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAp7wwVT_hzfA2mSXrrh-1ZUx7QCX3ogtk&part=snippet&maxResults=10&type=video&q=마블"
      `https://raw.githubusercontent.com/younghwan12/reactapi/main/src/utils/youtube.json`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.items))
      .then((result) => setYoutubeSlider(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(
      // "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAp7wwVT_hzfA2mSXrrh-1ZUx7QCX3ogtk&part=snippet&maxResults=10&type=video&q=마블"
      `https://raw.githubusercontent.com/younghwan12/reactapi/main/src/utils/youtube.json`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.items))
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "reference api"]} />
        <YoutubeSlider youtubeSlider={youtubeSlider} />
        <YoutubeSearch onSearch={search} />
        <YoutubeBtn onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
