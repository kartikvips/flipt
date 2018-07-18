import { RECEIVE_ALL_USERS } from '../actions/types';

const UserReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      const newState = {};
      action.payload.data.forEach(el => (
        newState[el._id] = el
      ));
      return newState;
    default: 
      return state;
  }
}

export default UserReducer;