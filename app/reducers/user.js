import { SET_TOKEN } from "../actions/user";

const initilState = {
  token: "",
};

const reducer = (state = initilState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
