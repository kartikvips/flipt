import axios from 'axios';

export const fetchChatrooms = userId => (
  axios.get(`/user/${userId}/chats`)
)

export const createChatroom = (userAId, userBId) => (
  axios.post('message/new', { userAId, userBId })
)