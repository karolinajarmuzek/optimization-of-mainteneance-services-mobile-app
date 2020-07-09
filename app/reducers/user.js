import { SET_USER } from "../actions/user";

const initilState = {
  username: ""
};

const reducer = (state = initilState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
};

export default reducer;
