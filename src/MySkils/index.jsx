import React from "react";
import "./myskils.css"
function MySkils() {
  return (
    <>
      <div className="skilsSection d-flex flex-wrap">
        <div className="w-100">
          <div>
            <h2 className="title text-center">My skills</h2>
          </div>
        </div>
        <div className="column">
          <div className="w-100">
            <h6>
              Photoshop
              <span className="label">
                89<em>%</em>
              </span>
            </h6>
            <div className="bar w-100">
              <span className="progress" style={{ width: "89%" }}></span>
            </div>
            <br />
            <h6>
              React Js
              <span className="label">
                50<em>%</em>
              </span>
            </h6>
            <div className="bar w-100">
              <span className="progress" style={{ width: "50%" }}></span>
            </div>
            <br />
          </div>
        </div>
        <div class="column">
          <div class="progress_bars">
            <h6>
              CSS3
              <span class="label">
                74<em>%</em>
              </span>
            </h6>
            <div class="bar w-100">
              <span class="progress" style={{ width: "74%" }}></span>
            </div>
            <br />
            <h6>
              HTML5
              <span class="label">
                85<em>%</em>
              </span>
            </h6>
            <div class="bar w-100">
              <span class="progress" style={{ width: "85%" }}></span>
            </div>
            <br />
          </div>
        </div>
        <div class="column">
          <div class="progress_bars">
            <h6>
              Javascript / jQuery
              <span class="label">
                65<em>%</em>
              </span>
            </h6>
            <div class="bar w-100">
              <span class="progress" style={{ width: "65%" }}></span>
            </div>
            <br />
            <h6>
              PHP
              <span class="label">
                50<em>%</em>
              </span>
            </h6>
            <div class="bar w-100">
              <span class="progress" style={{ width: "50%" }}></span>
            </div>
            <br /><br />
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkils;
