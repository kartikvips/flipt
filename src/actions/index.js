import axios from "axios";
import { 
  FETCH_USER,
  REGISTER_USER,
  RECEIVE_ALL_USERS
} from "./types";
import * as UserApiUtil from '../util/user_api_util';

export const fetchUser = (id) => {
  return  function(dispatch) {
    axios
      .get(`http://localhost:5000/api/current_user/${id}`)
      .then(res => {
        // console.log('made it to the fetch user', res);
        return dispatch({ type: FETCH_USER, payload: res.data });
      });
  };
};

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers()
    .then(users =>  dispatch(receiveUsers(users)))
    .catch(err => console.log(err))
);

export const registerUser = user => ({
  type: REGISTER_USER,
  user
});


const receiveUsers = (payload) =>({
  type: RECEIVE_ALL_USERS,
  payload
})