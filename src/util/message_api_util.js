import axios from 'axios';

export const fetchMessages = chatId => {
  return axios.get(`/message/${chatId}/all`)
}