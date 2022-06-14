import axios from "axios";
import { GET_POSTS } from "../types/types";

export const getPosts = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    const newData = res.data.map((post) => ({ ...post, likes: 0 }));
    dispatch({ type: GET_POSTS, payload: newData });
  });
};
