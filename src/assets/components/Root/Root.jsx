import React, { useEffect } from "react";
import Navbar from "../Header/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="fontFamily min-h-screen flex flex-col caret-transparent">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={1000} newestOnTop />
    </div>
  );
};

export default Root;
