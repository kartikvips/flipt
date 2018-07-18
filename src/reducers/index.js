import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducer';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';
import UserReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  users: UserReducer,
  books: bookReducer,
  chats: chatReducer,
  messages: messageReducer
});