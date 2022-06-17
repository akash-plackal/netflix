import React from "react";
import logo from "../assets/netflix-logo-0.png";
import { GoSearch } from "react-icons/go";
import { BsFillBellFill } from "react-icons/bs";
import { MdAccountBox } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="px-11 py-6  flex text-white ">
      <img src={logo} alt="logo" className="w-32 h-9" />
      <div className="flex justify-between w-11/12">
        <div className="flex justify-between items-center px-5 w-4/12 text-sm ">
          <p>Homepage</p>
          <p>Series</p>
          <p>Movies</p>
          <p>New and Popular</p>
          <p>My List</p>
        </div>
        <div className="flex items-center text-2xl w-32 justify-between">
          <GoSearch />
          <BsFillBellFill />
          <MdAccountBox />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
