import "./App.css";
import { Tab } from "@headlessui/react";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-800 my-10">
        Welcome To The New Era
      </h1>
      <Tab.Group>
        <Tab.List className="flex justify-center">
          <Tab
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-3 text-sm font-light
                  outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#18615b] text-[#120302]"
                      : "border-b-2 border-[#120302] text-[#d4af37]"
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
                      ? "borderGradient bg-[#18615b] text-[#120302]"
                      : "border-b-2 border-[#120302] text-[#d4af37]"
                  }
                  `
            }
          >
            Users
          </Tab>
          <Tab
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-3 text-sm font-light
                  outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#18615b] text-[#120302]"
                      : "border-b-2 border-[#120302] text-[#d4af37]"
                  }
                  `
            }
          >
            Tab 3
          </Tab>
        </Tab.List>
        <Tab.Panels className="mx-auto pt-15 pb-25 max-w-fit sm:px-4">
          <Tab.Panel className="tabPanel">Content 1</Tab.Panel>
          <Tab.Panel className="tabPanel">Content 2</Tab.Panel>
          <Tab.Panel className="tabPanel">Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default App;
