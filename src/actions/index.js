import axios from "axios";
import { FETCH_USER, REGISTER_USER } from "./types";

export const fetchUser = () => {
  return function (dispatch) {
    axios
      .get('/api/current_user')
      .then(res => {
        return dispatch({ type: FETCH_USER, payload: res.data });
      });
  };
};

export const registerUser = (user) => ({
  type: REGISTER_USER,
  user
})
