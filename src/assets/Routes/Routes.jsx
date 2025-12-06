import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
<<<<<<< HEAD
        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },

        hydrateFallbackElement: <h1>Loading ...</h1>,
=======
        loader: () => fetch("booksData.json"),
        hydrateFallbackElement:<h1>Loading....</h1>,
>>>>>>> dffb6c46d58b9d15b9dd02ce6ffa939f6eb37787
        Component: Home,
      },
      {
        path: "listed-books",
        Component: ListedBooks,
      },
      {
<<<<<<< HEAD
        path: "pages-to-read",
        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },
        hydrateFallbackElement: <h1>Loading ...</h1>,
        Component: PagesToRead,
      },
      {
        path: "bookDetails/:id",
        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },
        hydrateFallbackElement: <h1>Loading ...</h1>,
=======
        path: "/pages-to-read",
        loader: () => fetch("booksData.json"),
        hydrateFallbackElement:<h1>Loading....</h1>,
        Component: PagesToRead,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("booksData.json"),
        hydrateFallbackElement:<h1>Loading....</h1>,
>>>>>>> dffb6c46d58b9d15b9dd02ce6ffa939f6eb37787
        Component: BookDetails,
      },
    ],
  },
]);
