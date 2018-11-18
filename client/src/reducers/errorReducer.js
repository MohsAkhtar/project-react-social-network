// Reducer here is for all errors across application

import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

// set to empty object as we won't initially have any errors
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload; // just want to return errors
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
