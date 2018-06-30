import { FETCH_USER, REGISTER_USER } from "../actions/types";

INITIAL_STATE = {
  name: "stranger"
}

export default function(state = null, action) {
  // console.log(action.type)
  switch (action.type) {
    case FETCH_USER:
      // console.log("fetched user", action.payload )
      return action.payload || false;
    case REGISTER_USER:
      return action.user
    default:
      return state;
  }
}
