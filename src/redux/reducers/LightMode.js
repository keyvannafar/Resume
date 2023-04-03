const initstate = {
  lightMode: true,
};

const LightMode = (state = initstate, action) => {
  if (action.type === "LightModeOff") {
    return {
      ...state,
      lightMode: (state.lightMode = false),
    };
  } else if (action.type === "LightModeOn") {
    return {
      ...state,
      lightMode: (state.lightMode = true),
    };
  }
  {
    return state;
  }
};

export default LightMode;
