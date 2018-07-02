import axios from "axios";
import { FETCH_USER, REGISTER_USER } from "./types";

export const fetchUser = (id) => {
  return  function(dispatch) {

    axios
      .get(`http://localhost:5000/api/current_user/${id}`)
      .then(res => {

        return dispatch({ type: FETCH_USER, payload: res.data });
      });
  };
};

export const registerUser = (user) => ({
  type: REGISTER_USER,
  user
});
