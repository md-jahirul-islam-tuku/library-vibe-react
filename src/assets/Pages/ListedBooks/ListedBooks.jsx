import React, { useState } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import { ToastContainer } from "react-toastify";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import { RiArrowDownWideFill } from "react-icons/ri";

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState("");
  const [status, setStatus] = useState("");

  const toggleSort = (type) => {
    if (type === "pages") {
      setSortBy("totalPages");
      setStatus(": Pages");
    }
    if (type === "rating") {
      setSortBy("rating");
      setStatus(": Rating");
    }
    if (type === "publishingYear") {
      setSortBy("yearOfPublishing");
      setStatus(": Year");
    }
  };
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="bg-base-200 py-10 my-5 rounded-xl">
        <h1 className="text-3xl text-center font-bold">Books</h1>
      </div>
      <div className="flex justify-center mt-7 mb-10">
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-accent m-1"
            onClick={toggleSort}
          >
            Sort By {status} <RiArrowDownWideFill />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => toggleSort("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => toggleSort("pages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => toggleSort("publishingYear")}>
                Publishing year
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks sortBy={sortBy} />
        </TabPanel>
        <TabPanel>
          <WishlistBooks sortBy={sortBy} />
        </TabPanel>
      </Tabs>

      <ToastContainer autoClose={1000} position="top-center" />
    </div>
  );
};

export default ListedBooks;
