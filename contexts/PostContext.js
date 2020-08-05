import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
