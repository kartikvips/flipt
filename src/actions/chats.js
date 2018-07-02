import * as ChatApiUtil from '../util/chat_api_util';
import { RECEIVE_ALL_CHATROOMS, RECEIVE_CHATROOM } from './types';

const receiveAllChatrooms = chatrooms => ({
  type: RECEIVE_ALL_CHATROOMS,
  payload: chatrooms
})

const receiveChatroom = chatroom => ({
  type: RECEIVE_CHATROOM,
  payload: chatroom
})

export const fetchChatrooms = userId => dispatch => (
  ChatApiUtil.fetchChatrooms(userId)
    .then(chatrooms => dispatch(receiveAllChatrooms(chatrooms)))
    .catch(err => console.log("error in fetchChatrooms action", err))
)

export const createChatroom = (userAId, userBId) => dispatch => (
  ChatApiUtil.createChatroom(userAId, userBId)
    .then(chatroom => dispatch(receiveChatroom(chatroom)))
    .catch(err => console.log("error in createChatroom action", err))
)