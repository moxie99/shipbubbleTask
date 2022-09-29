import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/Features/postSlice";
import AddPosts from "./AddPosts";
import Modal from "./Modal";

const Posts = ({ loading, posts }) => {
  const [postId, setPostId] = React.useState(null);
  const [commentArray, setCommentArray] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);

  const getCurrentId = (id) => {
    setPostId(id);
  };

  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(deletePost({ id: id }));
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      setCommentArray(res.data);
    };
    fetchData();
  }, [postId]);

  console.log({ postId, commentArray });

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="h-full p-5 bg-[#ff5170]">
      <div className="flex items-center justify-center">
        <h1 className="mb-2 text-xl text-[#3734a9] font-bold">Add Post</h1>
      </div>
      <AddPosts />
      <div className="flex items-center justify-center">
        <h1 className="mb-2 text-xl text-[#3734a9] font-bold">All Post</h1>
      </div>
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
                <a
                  href="!#"
                  className="font-light hover:text-[#ff5170]"
                  onClick={() => {
                    getCurrentId(post.userId);
                    setModalOpen(!modalOpen);
                  }}
                >
                  {post.body}
                </a>
              </td>
              <td>
                <button
                  className="bg-[#3734a7] w-24 h-8 text-gray-100 rounded-full"
                  // onClick={() => {
                  //   onDelete(post.id);
                  // }}
                  onClick={(event) => {
                    event.preventDefault();
                    handleRemoveUser(post.id);
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {commentArray?.map((comment, index) => (
        <div className="flex flex-col items-center justify-center w-2/3 mx-auto my-2 bg-gray-100 rounded-xl">
          <div>
            <h4 className="font-bold text-black text-l">{comment?.name}</h4>
          </div>
          <div>
            <h5 className="text-sm text-gray-900">{comment?.email}</h5>
          </div>
          <div className="px-5">
            <h6 className="text-justify">{comment?.body}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
