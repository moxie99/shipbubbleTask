import axios from "axios";
import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const Posts = ({ loading, posts }) => {
  const [openComment, setOpenComment] = React.useState(false);
  const [userId, setUserId] = React.useState(null);
  const [commentData, setCommentData] = React.useState([]);
  const [renderedPosts, setRenderedPosts] = React.useState(posts);

  // const getCommentId = (id) => {
  //   setUserId(id);
  // };

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${userId}/comments`
  //     );
  //     setCommentData(res.data);
  //   };
  //   fetchData();
  // }, [userId]);

  if (loading) return <h2>Loading...</h2>;

  // delete function
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setRenderedPosts(
            renderedPosts.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <th className="textStyle">Action</th>
          </tr>
        </thead>
        <tbody>
          {renderedPosts.map((post, index) => (
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
              <td>
                <button
                  className="bg-[#3734a7] w-24 h-8 text-gray-100 rounded-full"
                  onClick={() => {
                    onDelete(post.id);
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openComment && <Modal />}
    </div>
  );
};

export default Posts;
