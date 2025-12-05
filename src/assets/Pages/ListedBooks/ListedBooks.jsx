import React from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import { ToastContainer } from "react-toastify";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="bg-base-200 py-10 my-5 rounded-xl">
        <h1 className="text-3xl text-center font-bold">Books</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks />
        </TabPanel>
        <TabPanel>
          <WishlistBooks/>
        </TabPanel>
      </Tabs>

      <ToastContainer autoClose={1000} position="top-center" />
    </div>
  );
};

export default ListedBooks;
