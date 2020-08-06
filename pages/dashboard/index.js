import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import Link from "next/link";

const Dashboard = () => {
  const { posts, setPosts } = useContext(PostContext);
  console.log(posts);
  return (
    <div>
      <h1>Dashboard</h1>

      <h3 className="text-4xl">My Posts</h3>
      <ul className="list-disc">
        {posts
          ? posts.map((post, index) => {
              return (
                <div className="break-words">
                  <li key={index}>
                    <Link href={"/dashboard/edit/" + post._id}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                </div>
              );
            })
          : "There was an error loading posts, please refresh the page."}
      </ul>
    </div>
  );
};

export default Dashboard;
