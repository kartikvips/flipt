import { FETCH_BOOK } from "../actions/types";
// import {merge} from 'lodash';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
}
