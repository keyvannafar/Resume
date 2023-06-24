const initstate = {
  MenuMob: false,
};

const ToggleMenu = (state = initstate, action) => {
  if (action.type === "openMenu") {
    return {
      ...state,
      MenuMob: (state.MenuMob = true),
    };
  } else if (action.type === "closeMenu") {
    return {
      ...state,
      MenuMob: (state.MenuMob = false),
    };
  }
  {
    return state;
  }
};

export default ToggleMenu;
