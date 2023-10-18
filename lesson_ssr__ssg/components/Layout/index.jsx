import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ setSearchTitle, children }) => {
  return (
    <>
      <Navbar setSearchTitle={setSearchTitle} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
