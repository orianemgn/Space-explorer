import React from "react";
import "./VideoCarousel.css";
import { Carousel } from "react-bootstrap";
import Vid1 from "../../assests/Vid4.mp4"
import Vid2 from "../../assests/Vid5.mp4"
import Vid3 from "../../assests/Vid6.mp4"
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css"


const VideoCarousel = () => {
  const videoProperties = [
    { id: 1, title: "Space", src: Vid1, credit: "Video from Pexels by Frank Cone" },
    { id: 2, title: "Space", src: Vid2, credit: "Video from Pexels by Michael Herren" },
    { id: 3, title: "Space", src: Vid3, credit: "Video from Pexels by Pixabay" },
  ];

  return <div className="video-carousel">
    <Carousel>
        {videoProperties.map((videoObj) => {
            return (
                <Carousel.Item key={videoObj.id}>
                    <ReactPlayer
                    url={videoObj.src}
                    onReady
                    pip={true}
                    controls={true}
                    playing={true}
                     />
                     <Carousel.Caption>
                        <h3>{videoObj.title}</h3>
                        <p>{videoObj.credit}</p>
                     </Carousel.Caption>
                </Carousel.Item>
            )
        })}
    </Carousel>
    </div>;
};

export default VideoCarousel;
