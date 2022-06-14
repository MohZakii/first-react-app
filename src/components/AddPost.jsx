import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADDING_POST } from "../redux/types/types";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch({ type: ADDING_POST, payload: post });
      setPost({
        title: "",
        body: "",
      });
      navigate("/posts");
    },
    [dispatch, navigate, post]
  );

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setPost((oldPost) => ({ ...oldPost, [name]: value }));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          className="form-control"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="body">
          Body
        </label>
        <input
          className="form-control"
          name="body"
          value={post.body}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
