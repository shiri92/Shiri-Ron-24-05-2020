import { CURR_WEATHER, FORECAST_5DAYS, TEMP_TYPE } from "../actions/types";

const initialState = {
  currWeather: {},
  curr5DaysForecast: [],
  isTempAsC: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
    case TEMP_TYPE:
      return {
        ...state,
        isTempAsC: !state.isTempAsC,
      };
    default:
      return state;
  }
}
