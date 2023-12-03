import React from "react";
const UnsplashItem = ({ video }) => {
  return (
    <li>
      {/* <a href={`https://api.unsplash.com/photos${image.id}`}> */}
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
        <p>{video.snippet.title}</p>
      {/* </a> */}
    </li>
  );
};
const UnsplashCont = ({ youtubes }) => {
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {youtubes.map((video, index) => (
              <UnsplashItem key={index} video={video} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default UnsplashCont;