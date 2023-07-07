const initstate = {
  loginMode: 0,
};

const LoginMode = (state = initstate, action) => {
  if (action.type === "empty") {
    return {
      ...state,
      loginMode: (state.loginMode = 0),
    };
  } else if (action.type === "trueData") {
    return {
      ...state,
      loginMode: (state.loginMode = 1),
    };
  } else if (action.type === "falseData") {
    return {
      ...state,
      loginMode: (state.loginMode = 2),
    };
  }
  {
    return state;
  }
};

export default LoginMode;
