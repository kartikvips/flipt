import data from './chatList.json';
import { RECEIVE_ALL_CHATROOMS, RECEIVE_CHATROOM } from '../actions/types';

const chatReducer = (state = data, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHATROOMS:
      console.log("in the reducer, payload is,", action.payload)
      return action.payload;
    case RECEIVE_CHATROOM:
      return {...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
}

export default chatReducer;