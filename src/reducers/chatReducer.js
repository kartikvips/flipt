import data from './chatList.json';
import { 
  RECEIVE_ALL_CHATROOMS,
  RECEIVE_CHATROOM,
  FETCH_USER
} from '../actions/types';

const normalized = (data) => {
  const newState = {}
  data.forEach(el => {
    newState[el._id] = el;
  })
  return newState;
}

const chatReducer = (state = normalized(data), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHATROOMS:
      console.log("in the reducer, payload is,", action.payload)
      return normalized(action.payload.data);
    case FETCH_USER:
      // debugger;
      const newst = normalized(action.payload.chatRoom);
      return newst;
    case RECEIVE_CHATROOM:
      return {...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
}

export default chatReducer;