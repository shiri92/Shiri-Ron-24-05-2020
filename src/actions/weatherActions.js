import {
  GET_LOCATIONS,
  GET_LOCATION,
  CURR_WEATHER,
  FORECAST_5DAYS,
  FAVORITES,
  TEMP_TYPE,
} from "./types";
import weatherService from "../services/weatherService";

export const getLocations = (query) => async (dispatch) => {
  const res = await weatherService.getLocations(query);
  dispatch({ type: GET_LOCATIONS, payload: res });
};

export const getCurrLocation = (query) => async (dispatch) => {
  const res = await weatherService.getCurrLocation(query);
  dispatch({ type: GET_LOCATION, payload: res });
};

export const getCurrentWeather = (locationKey) => async (dispatch) => {
  const res = await weatherService.getCurrentWeather(locationKey);
  dispatch({ type: CURR_WEATHER, payload: res });
};

export const get5DaysForecast = (locationKey) => async (dispatch) => {
  const res = await weatherService.get5DaysForecast(locationKey);
  dispatch({ type: FORECAST_5DAYS, payload: res });
};

export const addToFavorites = (newFavorite, favorites) => async (dispatch) => {
  const res = await weatherService.addToFavorites(newFavorite, favorites);
  dispatch({ type: FAVORITES, payload: res });
};

export const removeFromFavorites = (newFavorite, favorites) => async (
  dispatch
) => {
  const res = await weatherService.removeFromFavorites(newFavorite, favorites);
  dispatch({ type: FAVORITES, payload: res });
};

export const setFavorites = (newFavorites) => async (dispatch) => {
  const res = await weatherService.setFavorites(newFavorites);
  dispatch({ type: FAVORITES, payload: res });
};

export const toggleCToF = () => async (dispatch) => {
  dispatch({ type: TEMP_TYPE });
};
