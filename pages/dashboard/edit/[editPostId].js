import PostForm from "../../../components/PostForm";
import { useEffect, useContext, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";

const EditPost = ({ editPostId }) => {
  const { posts, setPosts } = useContext(PostContext);
  const [post, setPost] = useState({ loading: true, data: null });

  useEffect(() => {
    if (!posts.length) {
      return;
    }

    console.log(posts.length);
    posts.find((post) => {
      if (post._id === editPostId) {
        setPost({ loading: false, data: post });
      }
    });
  }, [posts]);

  return (
    <div>
      {post.loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-3xl">Loading...</div>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl text-center pt-12">Update post</h2>
          <PostForm buttonValue={"Update Post"} post={post.data} />
        </div>
      )}
    </div>
  );
};

EditPost.getInitialProps = async ({ query }) => {
  console.log(query);
  return {
    editPostId: query.editPostId,
  };
};

export default EditPost;
