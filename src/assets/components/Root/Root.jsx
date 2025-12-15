import React, { useEffect } from "react";
import Navbar from "../Header/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";

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
    </div>
  );
};

export default Root;
