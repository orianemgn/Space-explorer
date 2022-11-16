import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./VideoPage.css";

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

export default function VideoPage() {
  return (
    <div className="body-videopage">
      <>
        <section>
          <div id="parallax" class="parallax-item">
            <h2>Div 1</h2>
          </div>
          <div class="parallax-item">
            <h2>Div 2</h2>
          </div>
          <div class="parallax-item">
            <h2>Div 3</h2>
          </div>
          <div class="parallax-item">
            <h2>Div 4</h2>
          </div>
        </section>
      </>
    </div>
  );
}
