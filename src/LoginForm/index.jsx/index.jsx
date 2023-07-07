import { useEffect, useState } from "react";
import "./loginForm.css"
import React from "react";
import { useDispatch, useSelector } from "react-redux";


function LoginForm() {
  useEffect(()=>{
    window.location.replace("#home");
  })
    const loginMode = useSelector((state) => state.LoginMode.loginMode);
    const Language = useSelector((state) => state.LanChange.Language);
    const [localLog, setLocalLog] = useState(false);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    
  const setLog = useDispatch();
  const [Pro, setPro] = useState(1);
  function handlechange(e) {
    setUser(e.target.value);
  }
  function handlechangePass(e) {
    setPass(e.target.value);
  }
  function Login() {
    if (user == "" || pass == "") {
      setLog({type: "empty"});
    } else if (user == "web-dev" && pass == "web-dev") {
      setLog({type: "trueData"});
      window.history.replaceState(
        null,
        "",
        "/"
      );
    } else {
      setLog({type: "falseData"});
    }
  }
  return (
    <>
      <div className="animate__animated animate__zoomIn cv-main" id="LoginForm">
        <div className={`mainDta `}>
          <div className="w-100">
            <h4 className="col">
              {/* {Language == false ? <span>Lebenslauf</span> : <span>CV</span>} */}
            </h4>
            <div className="loginPage">
              <form className="loginForm">
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example1"
                    class="form-control"
                    name="email"
                    placeholder="password"
                    value={user}
                    onChange={handlechange}
                  />
                  <label class="form-label" for="form2Example1">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control"
                    name="email"
                    placeholder="password"
                    value={pass}
                    onChange={handlechangePass}
                  />
                  <label class="form-label" for="form2Example2">
                    Password
                  </label>
                </div>

                <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                    <div class="form-check">
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-block mb-4"
                  onClick={Login}
                >
                  Sign in
                </button>

                <div class="text-center">
                  <p>
                    Not a member? <a href="#!">Register</a>
                  </p>
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginForm;
