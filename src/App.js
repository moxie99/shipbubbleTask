import "./App.css";
import React from "react";
import { Tab } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./redux/Features/postSlice";
import { getUsers } from "./redux/Features/userSlice";
import { Circle } from "rc-progress";
import { useTable } from "react-table";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Users from "./components/Users";

function App() {
  const { posts, loading } = useSelector((state) => state.post);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerView, setpostPerView] = React.useState(10);

  React.useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  const lastPostIndex = currentPage * postsPerView;
  const firstPostIndex = lastPostIndex - postsPerView;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  // change page function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-10 text-3xl text-[#3734a7] font-bold">
        Welcome To My Blog
      </h1>
      <Tab.Group>
        <Tab.List className="flex justify-center">
          <Tab
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-3 text-sm font-light
                  outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#3734a7] text-[#fff]"
                      : "border-b-2 border-[#120302] text-[#ff5170]"
                  }
                  `
            }
          >
            Posts
          </Tab>
          <Tab
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-3 text-sm font-light
                  outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#3734a7] text-[#fff]"
                      : "border-b-2 border-[#120302] text-[#ff5170]"
                  }
                  `
            }
          >
            Users
          </Tab>
        </Tab.List>
        <Tab.Panels className="mx-auto pt-15 pb-25 max-w-fit sm:px-4">
          <Tab.Panel className="flex flex-col flex-1 md:flex-col">
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
              postsPerView={postsPerView}
              totalPosts={posts?.length}
              paginate={paginate}
            />
          </Tab.Panel>
          <Tab.Panel className="flex flex-1">
            <Users users={users} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default App;
