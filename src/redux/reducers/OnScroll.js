const initstate = {
  Scroll: 0,
};

const OnScroll = (state = initstate, action) => {
  if (action.type === "menuOnScroll") {
    return {
      ...state,
      Scroll: (state.Scroll = 1),
    };
  } else if (action.type === "zeroScroll") {
    return {
      ...state,
      Scroll: (state.Scroll = 0),
    };
  }
  {
    return state;
  }
};

export default OnScroll;
