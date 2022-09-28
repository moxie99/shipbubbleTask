import React from "react";
import { useTable } from "react-table";

const Posts = ({ loading, posts }) => {
  const [openComment, setOpenComment] = React.useState(false);
  const [userId, setUserId] = React.useState(null);
  const [commentData, setCommentData] = React.useState([]);

  const getCommentId = () => {};

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="h-full p-5 bg-[#ff5170]">
      <h1 className="mb-2 text-xl">All Post</h1>

      <table className="w-full">
        <thead className="bg-[#3734a9] border-b-2 border-[#ff5170]">
          <tr>
            <th className="textStyle">UserId</th>
            <th className="textStyle">Id</th>
            <th className="textStyle">Title</th>
            <th className="textStyle">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr
              className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}
              key={post?.id}
            >
              <td className="w-24 p-3 text-sm text-[#3734a7] text-justify">
                <a href="!#" className="font-light hover:text-[#ff5170]">
                  {post.userId}
                </a>
              </td>
              <td className="w-24 p-3 text-sm text-[#3734a7] text-justify">
                <a href="!#" className="font-light hover:text-[#ff5170]">
                  {post.id}
                </a>
              </td>
              <td className="w-24 p-3 text-sm text-[#3734a7] text-justify">
                <a href="!#" className="font-light hover:text-[#ff5170]">
                  <span className="p-2.5 text-xs font-medium uppercase tracking-wider bg-[#ff5170] bg-opacity-30 rounded-full">
                    {post.title.slice(0, 7) + "..."}
                  </span>
                </a>
              </td>
              <td className="p-3 text-sm text-[#3734a7] text-justify">
                <a href="!#" className="font-light hover:text-[#ff5170]">
                  {post.body}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
