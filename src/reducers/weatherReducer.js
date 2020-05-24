import {
  GET_LOCATIONS,
  GET_LOCATION,
  CURR_WEATHER,
  FORECAST_5DAYS,
  FAVORITES,
  TEMP_TYPE,
} from "../actions/types";
import dummyData from "../services/dummyData";

const initialState = {
  locations: [],
  currLocation: {},
  currWeather: {},
  curr5DaysForecast: [],
  //restart the app with some exist favorites
  favorites: dummyData.dummyFavorites,
  isTempAsC: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    case GET_LOCATION:
      return {
        ...state,
        currLocation: action.payload[0],
      };
    case CURR_WEATHER:
      return {
        ...state,
        currWeather: action.payload[0],
      };
    case FORECAST_5DAYS:
      return {
        ...state,
        curr5DaysForecast: action.payload.DailyForecasts,
      };
    case FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case TEMP_TYPE:
      return {
        ...state,
        isTempAsC: !state.isTempAsC,
      };
    default:
      return state;
  }
}
