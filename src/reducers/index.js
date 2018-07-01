import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducer';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  auth: authReducer,
  books: bookReducer,
  chats: chatReducer,
  messages: messageReducer
});