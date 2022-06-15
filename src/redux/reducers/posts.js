import { v4 as uuid } from "uuid";
import { ADDING_POST, DELETE_POST, GET_POSTS } from "../types/types";

const reducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_POST:
      const newstate = state.filter((post) => payload !== post.id);
      return newstate;
    case ADDING_POST:
      return [{ ...payload, id: uuid() }, ...state];
    case GET_POSTS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
