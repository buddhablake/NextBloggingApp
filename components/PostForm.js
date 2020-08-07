import useForm from "../utils/useForm";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../contexts/PostContext";
import axios from "axios";
// import { useRouter } from "next/router";

const PostForm = ({ buttonValue, post, newPost }) => {
  const [values, setValues, handleChange] = useForm();
  const { posts, setPosts } = useContext(PostContext);

  useEffect(() => {
    setValues(post);
  }, []);

  const createPost = (e) => {
    e.preventDefault();

    if (newPost) {
      axios
        .post("/api/posts", values)
        .then((res) => {
          setPosts((posts) => [...posts, res.data.data]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      axios
        .put("/api/posts/" + values._id, values)
        .then((res) => {
          //retrieves the index position of the edited post
          const indexValue = posts.findIndex((index) => index._id === post._id);

          // creates a temporary copy of the posts array
          const updatedPosts = [...posts];

          //removes the previous version of the now updated post from the array
          updatedPosts.splice(indexValue, 1);

          //sets the value of posts equal to our updated array and adds in the updated post sent back from the database
          setPosts((posts) => [res.data.data, ...updatedPosts]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

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
      <input type="submit" value={buttonValue} />
    </form>
  );
};

export default PostForm;
