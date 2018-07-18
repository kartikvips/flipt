import axios from 'axios';

export const fetchUser = () => {
  return axios.get('/api/current_user');
};

export const getUser = (id) => {
  return axios.get(`http://localhost:5000/api/current_user/${id}`);
};

// export const fetchUser = id => {
//   return axios.get('http://localhost:5000/users')
// }