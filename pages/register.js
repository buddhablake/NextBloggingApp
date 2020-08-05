import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const Register = () => {
  const { posts, setPosts } = useContext(PostContext);

  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};

export default Register;
