import PostForm from "../../../components/PostForm";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";

const EditPost = () => {
  const router = useRouter();
  let { editPostId } = router.query;
  const { posts, setPosts } = useContext(PostContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    posts.find((post) => {
      if (post._id === editPostId) {
        setPost(post);
      }
    });
  }, [{ editPostId }, { posts }]);

  return (
    <div>
      <h2 className="text-4xl text-center pt-12">Update post</h2>
      {editPostId && posts.length && post ? (
        <PostForm buttonValue={"Update Post"} post={post} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default EditPost;

//
