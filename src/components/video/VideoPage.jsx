import React from "react";
import { Parallax } from "react-scroll-parallax";
import bg1 from "../../assests/bg1.jpg";
import bg2 from "../../assests/bg2.jpg";
import "./VideoPage.css";

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
