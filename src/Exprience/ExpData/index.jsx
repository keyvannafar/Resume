import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Exprience.css"
function ExprienceForm({
  title,
  dateLastJob,
  lastJobTitle,
  lastJobCompany,
  dateActiveJob,
  activeJobTitle,
  activeJobCompany,
  lastJobTask1,
  lastJobTask2,
  lastJobTask3,
  lastJobTask4,
  lastJobTask5,
  lastJobTask6,
  lastJobTask7,
  dateMiddleJob,
  middleJobTitle,
  middleJobCompany,
  middleJobTask1,
  middleJobTask2,
  middleJobTask3,
  middleJobTask4,
  middleJobTask5,
}) {
  const setLanguage = useDispatch();
  const [Lan, setLan] = useState(false);
  return (
    <>
      <div className="animate__animated animate__fadeInRightBig container mb-5">
        <div>
          {/* <div className="cv-titles w-100">
            <div className="cv-title ms-1 me-1 text-black"></div>
          </div> */}
          {/* <div className="spacer"></div> */}
          <div className="cv-titles">
            <div className="personal-left">
              <span className="personal-left">{dateActiveJob} </span>
            </div>
            <div className="personal-right">
              <h5 className="text-black">{activeJobTitle}</h5>
            </div>
            <div className="personal-left">
              <span> </span>
            </div>
            <div className="personal-right">
              <span>{activeJobCompany}</span>
            </div>
            <br />
            <br />
            <div className="personal-left">
              <span className="personal-left">{dateLastJob} </span>
            </div>
            <div className="personal-right">
              <h5 className="text-black">{lastJobTitle}</h5>
            </div>
            <div className="personal-left">
              <span> </span>
            </div>
            <div className="personal-right">
              <span>
                <i class="bi bi-check-lg"></i> {lastJobCompany}
              </span>
            </div>
            <div className="personal-left">
              <span> </span>
            </div>
            <div className="personal-right">
              <span>
                <i class="bi bi-check-lg"></i> {lastJobTask1}
                <br />
                <i class="bi bi-check-lg"></i> {lastJobTask2}
                <br />
                <i class="bi bi-check-lg"></i> {lastJobTask3}
                <br />
                <i class="bi bi-check-lg"></i> {lastJobTask4}
                <br />
                <i class="bi bi-check-lg"></i> {lastJobTask5}
                <br />
                <i class="bi bi-check-lg"></i> {lastJobTask6}
                <br />
                <i class="bi bi-check-lg"></i> {lastJobTask7}
              </span>
            </div>
          </div>
          <div className="cv-titles">
            <div className="personal-left">
              <span>{dateMiddleJob}</span>
            </div>
            <div className="personal-right">
              <h5 className="text-black">{middleJobTitle}</h5>
            </div>
            <div className="personal-left">
              <span> </span>
            </div>
            <div className="personal-right">
              <span>
                <i class="bi bi-check-lg"></i> {middleJobCompany}{" "}
              </span>
            </div>
            <div className="personal-left">
              <span> </span>
            </div>
            <div className="personal-right">
              <span>
                <i class="bi bi-check-lg"></i> {middleJobTask1}
                <br />
                <i class="bi bi-check-lg"></i> {middleJobTask2}
                <br />
                <i class="bi bi-check-lg"></i> {middleJobTask3}
                <br />
                <i class="bi bi-check-lg"></i> {middleJobTask4}
                <br />
                <i class="bi bi-check-lg"></i> {middleJobTask5}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExprienceForm;
