import * as MessageApiUtil from '../util/message_api_util';
import { RECEIVE_ALL_MESSAGES } from './types';

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  payload: messages
})

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  payload: message
})

export const fetchMessages = chatId => dispatch => (
  MessageApiUtil.fetchMessages(chatId)
    .then(messages => dispatch(receiveAllMessages(messages)))
    .then(err => console.log("error in fetchMessages: ", err))
)

export const createMessage = (message) => dispatch(
  MessageApiUtil.createMessage(message)
    .then(message => dispatch(receiveMessage(message)))
    .then(err => console.log("error in createMessage: ", err))
)