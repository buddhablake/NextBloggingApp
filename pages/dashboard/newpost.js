import PostForm from "../../components/PostForm";

const NewPost = () => {
  return (
    <div>
      <h2 className="text-4xl text-center pt-12">Create a new post</h2>
      <PostForm buttonValue={"Add New Post"} newPost={true} />
    </div>
  );
};

export default NewPost;
