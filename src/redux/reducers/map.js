import { GET_MAP_INFO } from "../types/types";

const reducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MAP_INFO:
      const newstate = state.filter((post) => payload !== post.id);
      return newstate;;
    default:
      return state;
  }
};

export default reducer;
