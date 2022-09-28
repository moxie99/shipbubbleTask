import React from "react";

const Posts = ({ loading, posts }) => {
  const [renderedArray, setRenderedArray] = React.useState([]);

  React.useEffect(() => {
    setRenderedArray(posts);
  }, [posts]);

  // delete function
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setRenderedArray(
            renderedArray.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <th className="textStyle">Action</th>
          </tr>
        </thead>
        <tbody>
          {renderedArray.map((post, index) => (
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
    </div>
  );
};

export default Posts;
