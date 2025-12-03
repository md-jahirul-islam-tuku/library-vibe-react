import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";
import Books from "../Books/Books";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-[1170px] mx-auto p-2">
      <Banner />
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
