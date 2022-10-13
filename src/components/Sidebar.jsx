import React from "react";
import logo from "../assets/logo.svg";
import { HiHome, HiOutlineLogout, HiUser } from "react-icons/hi";
import { MdOutlineMusicVideo } from "react-icons/md";
import { RiRadio2Fill } from "react-icons/ri";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="hidden lg:block w-max h-screen fixed">
      <div className="p-4 flex flex-col items-center">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="mt-8 px-4 rounded-full bg-darkAlt flex justify-center">
          <ul className="text-center">
            <li className="text-white text-lg py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "text-white"
                }
              >
                <HiHome />
              </NavLink>
            </li>
            <li className="text-light text-lg py-4">
              <NavLink
                to="collection"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "text-white"
                }
              >
                <BsFillCollectionPlayFill />
              </NavLink>
            </li>
            <li className="text-light text-lg py-4">
              <RiRadio2Fill />
            </li>
            <li className="text-light text-lg py-4">
              <MdOutlineMusicVideo />
            </li>
          </ul>
        </div>

        <div className="mt-2 px-4 rounded-full bg-darkAlt flex justify-center">
          <ul className="text-center">
            <li className="text-light text-lg py-4">
              <HiUser />
            </li>
            <li className="text-light text-lg py-4">
              <HiOutlineLogout />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const SideMenu = () => {
  return <div>SideMenu</div>;
};
