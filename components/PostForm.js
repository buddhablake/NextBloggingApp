import useForm from "../utils/useForm";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import axios from "axios";

const PostForm = () => {
  const [values, setValues, handleChange] = useForm();
  const { posts, setPosts } = useContext(PostContext);

  const createPost = (e) => {
    e.preventDefault();
    axios
      .post("/api/posts", values)
      .then((res) => {
        setPosts((posts) => [...posts, res.data.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });

    console.log(values);
    setValues({});
  };

  return (
    <form onSubmit={createPost} className="grid gap-4 p-16">
      <input
        className="border-4 border-black"
        type="text"
        name="title"
        onChange={handleChange}
        value={values.title || ""}
      />
      <textarea
        className="border-4 border-black"
        name="body"
        onChange={handleChange}
        value={values.body || ""}
      ></textarea>
      <input
        className="border-4 border-black"
        type="text"
        name="author"
        onChange={handleChange}
        value={values.author || ""}
      />
      <input type="submit" />
    </form>
  );
};

export default PostForm;
