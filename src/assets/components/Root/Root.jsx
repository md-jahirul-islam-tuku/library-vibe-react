import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="fontFamily">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
