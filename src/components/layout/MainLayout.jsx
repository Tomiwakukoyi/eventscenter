import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
