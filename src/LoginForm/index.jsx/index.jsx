import { useEffect, useState } from "react";
import "./loginForm.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
function LoginForm() {
  useEffect(() => {
    window.location.replace("#home");
  });
  const loginMode = useSelector((state) => state.LoginMode.loginMode);
  const Language = useSelector((state) => state.LanChange.Language);
  // const [localLog, setLocalLog] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ User: "", Pass: "" });
  const setLog = useDispatch();
  // const [Pro, setPro] = useState(1);
  function Login() {
    if (loginInfo.User == "" || loginInfo.Pass == "") {
      setLog({ type: "empty" });
    } else if (loginInfo.User == "web-dev" && loginInfo.Pass == "web-dev") {
      setLog({ type: "trueData" });
      window.history.replaceState(null, "", "/");
    } else {
      setLog({ type: "falseData" });
    }
  }
  return (
    <>
      <div className="cv-main" id="LoginForm">
        <div className={`mainDta`}>
          <div className="w-100">
            <div className="loginPage">
              <form className="loginForm">
                <h4 className="col text-center">
                  {Language == false ? (
                    <span>Bitte melden Sie sich an.</span>
                  ) : (
                    <span>Please sign in.</span>
                  )}
                </h4>
                <br />
                <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example1">
                    Email address *
                  </label>
                  <input
                    type="userName"
                    id="form2Example1"
                    className="form-control"
                    name="User"
                    // value={loginInfo.User}
                    onChange={(e) =>
                      setLoginInfo({ ...loginInfo, User: e.target.value })
                    }
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example2">
                    Password *
                  </label>
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    name="User"
                    // value={pass}
                    onChange={(e) =>
                      setLoginInfo({ ...loginInfo, Pass: e.target.value })
                    }
                  />
                </div>
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check warningLabel">
                      {loginMode == 0 ? (
                        <label className="form-label" for="form2Example1">
                          One or two fields are empty!
                        </label>
                      ) : loginMode == 2 ? (
                        <label className="form-label" for="form2Example1">
                          The username or password is invalid!
                        </label>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block mb-4 btnLogin"
                  onClick={Login}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginForm;
