import axios from "axios";
import { FETCH_USER, REGISTER_USER } from "./types";
import * as UserApiUtil from '../util/user_api_util';


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
    .then(res => {
      console.log("res user", res)
      return dispatch(receiveUser(res.data))
    })
    .catch(res => console.log("err", res))
}

export const registerUser = (user) => ({
  type: REGISTER_USER,
  user
})
