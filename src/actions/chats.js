import * as ChatApiUtil from '../util/chat_api_util';
import { RECEIVE_ALL_CHATROOMS } from './types';

const receiveChatrooms = chatrooms => ({
  type: RECEIVE_ALL_CHATROOMS,
  payload: chatrooms
})

export const fetchChatrooms = userId => dispatch => (
  ChatApiUtil.fetchChatrooms(userId)
    .then(chatrooms => dispatch(receiveChatrooms(chatrooms)))
    .catch(err => console.log("error in fetchChatrooms action", err))
)