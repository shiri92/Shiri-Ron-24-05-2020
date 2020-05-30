import dummyData from "./dummyData";

const API_KEY = "CA4pOBrUyGWeAykkbBDxTLED97tROrPn";

const getLocations = async (query) => {
  try {
    // const apiCall = await fetch(
    //   `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    // );
    const apiCall = false;
    const res = await apiCall.json();
    return res;
  } catch (error) {
    return dummyData.dummyLocations;
  }
};

const getCurrLocation = async (query) => {
  try {
    // const apiCall = await fetch(
    //   `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    // );
    const apiCall = false;
    const res = await apiCall.json();
    return res;
  } catch (error) {
    return dummyData.dummyCurrLocation;
  }
};

const getCurrentWeather = async (locationKey) => {
  try {
    // const apiCall = await fetch(
    //   `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}/?apikey=${API_KEY}`
    // );
    const apiCall = false;
    const res = await apiCall.json();
    return res;
  } catch (error) {
    return dummyData.dummyCurrWeather;
  }
};

const get5DaysForecast = async (locationKey) => {
  try {
    // const apiCall = await fetch(
    //   `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`
    // );
    const apiCall = false;
    const res = await apiCall.json();
    return res;
  } catch (error) {
    return dummyData.dummyCurr5DaysForecast;
  }
};

const createFavorite = (currLocation, currWeather) => {
  return {
    id: currLocation.Key,
    name: currLocation.LocalizedName,
    currWeather,
  };
};

const setFavorites = (newFavorites) => {
  return newFavorites;
};

const addToFavorites = (newFavorite, favorites) => {
  favorites.push(newFavorite);
  return favorites;
};

const removeFromFavorites = (newFavorite, favorites) => {
  const cityIdx = favorites.findIndex((city) => city.id === newFavorite.id);
  favorites.splice(cityIdx, 1);
  return favorites;
};

export default {
  getLocations,
  getCurrLocation,
  getCurrentWeather,
  get5DaysForecast,
  createFavorite,
  addToFavorites,
  removeFromFavorites,
  setFavorites,
};
