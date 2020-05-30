import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import favoritesReducer from "./favoritesReducer";
import locationsReducer from "./locationsReducer";

export default combineReducers({
  weatherReducer,
  favoritesReducer,
  locationsReducer,
});
