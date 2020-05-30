import { FAVORITES } from "../actions/types";
import dummyData from "../services/dummyData";

const initialState = {
  //restart the app with some exist favorites
  favorites: dummyData.dummyFavorites,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}
