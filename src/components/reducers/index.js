import counterReducer from "./counter";
import uploadReducer from "./uploads";
import { combineReducers } from "redux";
import nameReducer from "./name";

const allReducers = combineReducers({
  counter: counterReducer,
  uploads: uploadReducer,
  name: nameReducer,
});

export default allReducers;
