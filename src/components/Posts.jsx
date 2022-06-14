import { memo } from "react";
import { useSelector } from "react-redux/es/exports";

import Post from "./Post";

const Posts = () => {
  const posts = useSelector((store) => store.posts);

  if (!posts) return <h3>Loading...</h3>;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Likes</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default memo(Posts);
