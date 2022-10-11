import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
