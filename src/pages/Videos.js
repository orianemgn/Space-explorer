
import { ParallaxProvider } from "react-scroll-parallax";
import VideoPage from "../components/video/VideoPage";



export default function Videos() {
  return (
    <>
    <ParallaxProvider>
      <VideoPage />
      </ParallaxProvider>
      </>
      
  );
}

