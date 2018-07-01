import { RECEIVE_BOOK } from "../actions/types";
import data from "./bookList.json";
// import {merge} from 'lodash';

export default function(state = data, action) {
  switch (action.type) {
    case RECEIVE_BOOK:
      return {...state, [action.payload.isbn]: action.payload  } ;
    default:
      return state;
  }
}
