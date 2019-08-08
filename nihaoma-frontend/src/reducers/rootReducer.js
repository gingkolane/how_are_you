import { combineReducers } from "redux";
import problemsReducer from "./problemsReducer";
import currentProblem from "./currentProblemReducer";
import currentUser from "./currentUserReducer";
import loggedIn from "./loggedInReducer";

export default combineReducers({
  problems: problemsReducer,
  currentProblem: currentProblem,
  currentUser,
  loggedIn
});
