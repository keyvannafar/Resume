import { combineReducers } from "redux";
import LanChange from "./LanChange";
import ButtonDes from "./ButtonDes";
import OnScroll from "./OnScroll";
import LightMode from "./LightMode";
import ToggleMenu from "./ToggleMenu";
const reducer = combineReducers({
  LanChange,
  ButtonDes,
  OnScroll,
  LightMode,
  ToggleMenu
});

export default reducer;