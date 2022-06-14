import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddPost from "../components/AddPost";
import Posts from "../components/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/posts";

const PostsModule = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path="/AddPost" element={<AddPost />} />
    </Routes>
  );
};

export default PostsModule;
