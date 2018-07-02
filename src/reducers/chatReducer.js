import data from './chatList.json';
import { RECEIVE_ALL_CHATROOMS } from '../actions/types';

const chatReducer = (state = data, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHATROOMS:
      return action.payload;
    default:
      return state;
  }
}

export default chatReducer;