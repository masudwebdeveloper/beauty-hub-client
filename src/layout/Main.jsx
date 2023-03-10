import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/share/Footer";

const Main = () => {
  return (
    <section>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
