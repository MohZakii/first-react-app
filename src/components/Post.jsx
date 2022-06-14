import { memo, useCallback } from "react";
import { useCount } from "../hooks/useCount";
import { useDispatch } from "react-redux";
import { DELETE_POST } from "../redux/types/types";
import PropTypes from "prop-types";

const Post = (props) => {
  const { id, title, body, likes } = props;
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch({ type: DELETE_POST, payload: id });
  }, [dispatch, id]);

  const [counter, increment] = useCount(likes);

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{body}</td>
      <td className="text-center">
        {counter}{" "}
        <button
          className="btn btn-primary btn-sm text-center"
          onClick={increment} //TODO
        >
          +
        </button>
      </td>
      <td>
        <button className="btn btn-primary" onClick={handleDelete}>
          Delete Post
        </button>
      </td>
    </tr>
  );
};

Post.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
};

Post.defaultProps = {
  title: "Post Title",
  body: "Post Body",
};

export default memo(Post);
