import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./NavBar.css";

const NavBar = () => {
  const routes = [
    {
      id: 1,
      path: "/topics",
      name: "Topics",
    },
    {
      id: 2,
      path: "/statistcs",
      name: "Statistics",
    },
    {
      id: 3,
      path: "/blog",
      name: "Blogs",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-200 flex items-center w-full py-3">
      <h1 className="text-xl font-bold ml-7">Quizee</h1>
      <div
        onClick={() => setOpen(!open)}
        className="h-7 w-7 md:hidden ml-auto mr-7"
      >
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`bg-gray-200 md:flex w-full py-3 justify-center md:justify-end md:mr-7 md:py-0 absolute md:static duration-200 ease-in ${
          open ? "top-12" : "top-[-200px]"
        }`}
      >
        {routes.map((route) => (
          <li className="md:mx-3 text-base">
            <NavLink
              to={route.path}
              key={route.id}
              className={({ isActive }) => (isActive ? "bg-active" : undefined)}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
