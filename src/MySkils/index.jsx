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
            {/* <ul className="w-100 p-0">
              <ul className="w-100">
                <li className="w-100"> */}
            <h6>
              Photoshop
              <span className="label">
                49<em>%</em>
              </span>
            </h6>
            <div className="bar w-100">
              <span className="progress" style={{ width: "89%" }}></span>
            </div>
            <br />
            {/* </li>
                <li> */}
            <h6>
              3D Max
              <span className="label">
                78<em>%</em>
              </span>
            </h6>
            <div className="bar w-100">
              <span className="progress" style={{ width: "99%" }}></span>
            </div>
            <br />
            {/* </li>
              </ul>
            </ul> */}
          </div>
        </div>
        <div class="column">
          <div class="progress_bars">
            {/* <ul class="hover p-0">
              <ul>
                <li> */}
            <h6>
              CSS3
              <span class="label">
                74<em>%</em>
              </span>
            </h6>
            <div class="bar w-100">
              <span class="progress" style={{ width: "49%" }}></span>
            </div>
            <br />
            {/* </li>
                <li> */}
            <h6>
              HTML5
              <span class="label">
                90<em>%</em>
              </span>
            </h6>
            <div class="bar w-100">
              <span class="progress" style={{ width: "59%" }}></span>
            </div>
            <br />
            {/* </li>
              </ul>
            </ul> */}
          </div>
        </div>
        <div class="column">
          <div class="progress_bars">
            {/* <ul class="hover p-0">
              <ul>
                <li> */}
            <h6>
              Javascript / jQuery
              <span class="label">
                89<em>%</em>
              </span>
            </h6>
            <div class="bar w-100">
              <span class="progress" style={{ width: "69%" }}></span>
            </div>
            <br />
            {/* </li>
                <li> */}
            <h6>
              PHP
              <span class="label">
                50<em>%</em>
              </span>
            </h6>
            <div class="bar w-100">
              <span class="progress" style={{ width: "99%" }}></span>
            </div>
            <br /><br />
            {/* </li>
              </ul>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkils;
