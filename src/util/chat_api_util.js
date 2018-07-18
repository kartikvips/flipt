import axios from 'axios';

export const fetchChatrooms = userId => {
  console.log("api util call");
  return axios.get(`http://localhost:5000/users/${userId}/chats`)
}


export const createChatroom = (userAId, userBId) => (
  axios.post(`message/new/${userAId}/${userBId}`)
)