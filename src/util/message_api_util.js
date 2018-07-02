import axios from 'axios';

export const fetchMessages = chatId => {
  return axios.get(`/message/${chatId}/all`)
}

//{ message: { chatId: "..", senderId: "...", content: "...", time: "..." }}
export const createMessage = message => (
  axios.post('/message/send', { message })
)