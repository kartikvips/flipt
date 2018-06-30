import { RECEIVE_BOOK } from "../actions/types";
import data from "./bookList.json";
// import {merge} from 'lodash';
export default function(state = data, action) {
  switch (action.type) {
    case RECEIVE_BOOK:
      // debugger;
      return {...state, [action.payload.isbn]: action.payload, isbn: [action.payload.isbn] } ;
    default:
      return state;
  }
}
