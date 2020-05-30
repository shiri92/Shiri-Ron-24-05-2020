import { GET_LOCATIONS, GET_LOCATION } from "../actions/types";

const initialState = {
  locations: [],
  currLocation: {},
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
    default:
      return state;
  }
}
