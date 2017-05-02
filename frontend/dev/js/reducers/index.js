import { combineReducers } from "redux";

import user from "./userReducer";
import problems from "./problemsReducer";
import solutions from "./solutionsReducer";

export default combineReducers({
  user,
  problems,
  solutions
});