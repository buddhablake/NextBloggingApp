import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const Login = () => {
  const { posts, setPosts } = useContext(PostContext);

  return (
    <div>
      <h1>login</h1>
    </div>
  );
};

export default Login;
