import React from "react";
import { useSelector } from "react-redux";

const Users = ({ users, loading }) => {
  const { posts } = useSelector((state) => state.post);
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState([]);
  if (loading) return <h2>Loading...</h2>;

  const userPostArray = [];
  const getPostsById = (id) => {
    posts.map((post) => (post.userId === id ? userPostArray.push(post) : null));
    setModalContent(userPostArray);
  };

  return (
    <div className="h-full sm:w-full p-5 bg-[#ff5170] md:flex flex-col flex-1">
      <h1 className="mb-2 text-xl">All Users</h1>

      <table>
        <thead className="bg-[#3734a9] border-b-2 border-[#ff5170]">
          <tr>
            <th className="textStyle">Name</th>
            <th className="textStyle">UserName</th>
            <th className="textStyle">Email</th>
            <th className="textStyle">Phone</th>
            <th className="textStyle">Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}
            >
              <td className="w-1/6 md:tableData">
                <a
                  href="!#"
                  className="font-light hover:text-[#ff5170]"
                  onClick={() => {
                    setOpen(true);
                    getPostsById(user.id);
                  }}
                >
                  {user.name}
                </a>
              </td>
              <td className="w-1/6 md:tableData">
                <a href="!#" className="font-light hover:text-[#ff5170]">
                  {user.username}
                </a>
              </td>
              <td className="w-1/6 md:tableData">
                <a href="!#" className="font-light hover:text-[#ff5170]">
                  <span className="p-2.5 text-xs font-medium uppercase tracking-wider bg-[#ff5170] bg-opacity-30 rounded-full">
                    {user.email}
                  </span>
                </a>
              </td>
              <td className="w-1/6 md:tableData">
                <a href="!#" className="font-light hover:text-[#ff5170]">
                  {user.phone}
                </a>
              </td>
              <td className="w-1/6 md:tableData">
                <a href="!#" className="font-light hover:text-[#ff5170]">
                  {user.address.suite +
                    " " +
                    user.address.street +
                    user.address.city}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {open
        ? modalContent.map((post, index) => (
            <div className="flex flex-col items-center w-10/12 px-10 mx-auto my-3 bg-gray-100 rounded-full">
              <h1 className="text-[#3734a9] font-black">Post {index + 1}</h1>
              <div className="flex flex-row items-center w-full p-1 my-1">
                <h2 className="text-[#3734a9] text-xl font-bold">Title:</h2>
                <h3 className="text-[#ff5170] text-sm font-light">
                  {post.title}
                </h3>
              </div>
              <div className="flex flex-row items-center w-full p-1 my-1">
                <h2 className="text-[#3734a9] text-xl font-bold">Content: </h2>
                <h3 className="text-[#ff5170] text-sm font-light">
                  {post.body}
                </h3>
              </div>
            </div>
          ))
        : null}

      {open && (
        <div className="flex items-center justify-center">
          <button
            className="bg-[#3734a9] w-9/12 h-10 text-gray-100 rounded-full"
            onClick={() => setOpen(false)}
          >
            CLOSE
          </button>
        </div>
      )}
    </div>
  );
};

export default Users;
