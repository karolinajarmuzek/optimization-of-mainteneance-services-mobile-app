import { SELECT_TASK } from "../actions/tasks";

const intialState = {
  task: null
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SELECT_TASK:
      return {
        ...state,
        task: action.task
      };
    default:
      return state;
  }
};

export default reducer;
