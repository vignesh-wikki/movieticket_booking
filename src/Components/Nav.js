import React, { useState } from "react";
import logo from "../assets/booking.png";
import user_png from "../assets/user.png";
import menu_icon from "../assets/menu.png";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10  h-[11%] overflow-hidden  flex justify-start ">
        <NavLink to="/" className="ps-8">
          <img src={logo}  className=" w-20 h-18" alt="logo-icon" />
        </NavLink>

        <div className=" absolute right-10 top-6 ">
          <div className="flex">
            <button className="border-2 rounded-full flex" onClick={toggleNav}>
              <img src={menu_icon} className=" w-6 h-6  me-1" alt="menu" />
              <img src={user_png} className=" w-6 h-6 ms-1  " alt="user" />
            </button>
           
          </div>
        </div>
      </div>
      {toggleMenu && (
              <div className="mt-20 z-[100] bg-black absolute top-1 right-8 p-8">
                <NavLink
                  className=" text-white hover:text-black hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
                  to="/"
                >
                  Home
                </NavLink>
                
              </div>
            )}
    </>
  );
}
