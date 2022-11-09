import React from "react";
import "./VideoCarousel.css";
import { Carousel } from "react-bootstrap";
// import Vid1 from "../../assests/Vid4.mp4";
// import Vid2 from "../../assests/Vid5.mp4";
// import Vid3 from "../../assests/Vid6.mp4";
import YoutubeVideo from "../youtube-video";
// import "bootstrap/dist/css/bootstrap.min.css"

// const videoProperties = [
//   {
//     id: 1,
//     title: "Space",
//     src: Vid1,
//     credit: "Video from Pexels by Frank Cone",
//   },
//   {
//     id: 2,
//     title: "Space",
//     src: Vid2,
//     credit: "Video from Pexels by Michael Herren",
//   },
//   {
//     id: 3,
//     title: "Space",
//     src: Vid3,
//     credit: "Video from Pexels by Pixabay",
//   },
// ];

const youtubeVideos = [
  "gosjiD288Jk",
  "hlGCcM_V3HI",
  "-YUYLbjl7Sk",
  "nq4tT68UoCg",
  "atjAURP2_9o",
  "wnhvanMdx4s",
  "X-XZx1o_w-A"
]
const VideoCarousel = () => {
 
  return (
    <div className="video-carousel">
      <Carousel>
        {youtubeVideos.map((element, index) => {
          return (
            <Carousel.Item key={index}>
              <YoutubeVideo id={element} />
              <Carousel.Caption>
                {/* <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
