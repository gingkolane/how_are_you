const defaultState = {
  id: null,
  title: "",
  description: "",
  up_votes: null,
  down_votes: null,
  author_id: null,
  author_username: "",
  loading: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_CURRENT_PROBLEM_START":
      return { ...state, loading: true };
    case "GET_CURRENT_PROBLEM_SUCCESS":
      return { ...action.problem, loading: false };
    case "GET_CURRENT_PROBLEM_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};
