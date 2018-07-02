import * as MessageApiUtil from '../util/message_api_util';
import { RECEIVE_ALL_MESSAGES } from './types';

const receiveMessages = payload => ({
  type: RECEIVE_MESSAGES,
  payload
})

export const fetchMessages = chatId => dispatch => (
  MessageApiUtil.fetchMessages(chatId)
    .then(messages => dispatch(receiveMessages(messages)))
    .then(err => console.log("error in fetchMessages: ", err))
)
