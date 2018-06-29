import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducer';
import chatReducer from './chatReducer';

export default combineReducers({
  auth: authReducer,
  books: bookReducer,
  chats: chatReducer
});