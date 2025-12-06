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
        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },

        hydrateFallbackElement: <h1>Loading ...</h1>,
        Component: Home,
      },
      {
        path: "listed-books",
        Component: ListedBooks,
      },
      {
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
        Component: BookDetails,
      },
    ],
  },
]);
