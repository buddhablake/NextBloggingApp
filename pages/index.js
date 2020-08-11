import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const Index = ({ hey }) => {
  const { posts, setPosts } = useContext(PostContext);

  return (
    <div>
      <h1>Index</h1>

      <div className="grid grid-cols-3 justify-center items-center text-center p-12">
        {posts
          ? posts.map((post, index) => {
              return (
                <div className="break-words">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <p>author: {post.author}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Index;
