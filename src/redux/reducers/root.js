import { combineReducers } from "redux";
import postsReducer from "./posts";
import map from "./map"

const rootReducer = combineReducers({
  posts: postsReducer,
  map: map
});

export default rootReducer;
