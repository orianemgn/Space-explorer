import React from "react";
import "./VideoPage.css";
import { useEffect } from "react";
import ReactPlayer from "react-player";


// const parallax = document.getElementById("parallax");
// Parallax Effect for DIV 1
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.6 + "px";




//   // DIV 1 background will move slower than other elements on scroll.
// }); 

export default function VideoPage() {
  const parallax = document.getElementById("parallax");
  useEffect(() => {
    function handleParallax () {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.6 + 'px';
      // DIV 1 background will move slower than other elements on scroll.
      
    }
    window.addEventListener("scroll",handleParallax); 
  
    return () => {
      window.removeEventListener("scroll",handleParallax);
    }
  }, [])
  return (
    <div className="body-videopage">
      <>
        <section>
          <div id="parallax" className="parallax-item">
            <h2>Div 1</h2>
          </div>
          <div class="react-player">
            <ReactPlayer width={'60%'} controls url="https://www.youtube.com/watch?v=86YLFOog4GM" />
            
          </div>
          <div className="parallax-item">
            <h2>Div 3</h2>
          </div>
          <div className="parallax-item">
            <h2>Div 4</h2>
          </div>
        </section>
      </>
    </div>
  );
}
