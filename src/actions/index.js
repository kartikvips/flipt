import axios from "axios";
import { FETCH_USER, REGISTER_USER } from "./types";
import * as UserApiUtil from '../util/user_api_util';

<<<<<<< HEAD
export const fetchUser = (id) => {
  return  function(dispatch) {

    axios
      .get(`http://localhost:5000/api/current_user/${id}`)
      .then(res => {

        return dispatch({ type: FETCH_USER, payload: res.data });
      });
  };
};
=======

// export const fetchUser = () => {
//   return function (dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res.data }))
//   }
// }

const receiveUser = payload => ({
  type: FETCH_USER,
  payload
})

// get current user
export const fetchUser = () => dispatch => {
  return UserApiUtil.fetchUser()
    .then(res => dispatch(receiveUser(res.data)))
    .catch(res => console.log("err", res))
}
>>>>>>> 494367f2731c89cc04b124f2006d2a686f92e544

export const registerUser = user => ({
  type: REGISTER_USER,
  user
});
