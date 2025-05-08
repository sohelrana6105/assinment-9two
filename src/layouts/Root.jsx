import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
