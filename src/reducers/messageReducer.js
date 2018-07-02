import data from './messageList.json';
import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../actions/types';

const messageReducer = (state = data, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.payload;
    case RECEIVE_MESSAGE:
      return {...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
}

export default messageReducer;