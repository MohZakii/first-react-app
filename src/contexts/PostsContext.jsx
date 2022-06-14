// import { useState, useEffect, createContext } from "react";
// import axios from "axios";
// import { v4 as uuid } from "uuid";

// export const PostsContext = createContext();

// const PostsContextProvider = (props) => {
//   const [posts, setPosts] = useState(null);
//   const { children } = props;

//   useEffect(() => {
//     const getData = async () => {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(res.data);
//     };

//     getData();
//   }, []);

//   const addPost = (post) => {
//     setPosts((oldPosts) => [{ ...post, id: uuid() }, ...oldPosts]);
//   };

//   const delPost = (postId) => {
//     setPosts((oldPosts) => posts.filter((post) => postId !== post.id));
//   };

//   return (
//     <PostsContext.Provider value={{ posts, setPosts, addPost, delPost }}>
//       {children}
//     </PostsContext.Provider>
//   );
// };

// export default PostsContextProvider;
