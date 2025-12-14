import React, { use } from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";
import Books from "../Books/Books";
import { AuthContext } from "../../../contexts/AuthContext";

const Home = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  return (
    <div className="max-w-[1170px] mx-auto p-2">
      <Banner />
      {user ? <Books data={data}></Books> : ""}
    </div>
  );
};

export default Home;
