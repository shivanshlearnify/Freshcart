import React from "react";
import logo from "../../assets/freshcart-logo.svg";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { TbCategory } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto h-[100px]">
        <div className="flex items-center h-[75px] justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="">
            <div className="flex  justify-between mx-auto border border-gray-500 rounded items-center  ">
              <input
                className="border-r-2 border-gray-400 w-[950px] h-[30px] px-3 py-4 outline-none focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <MdOutlineSearch className="w-[35px] text-[20px] text-gray-500 cursor-pointer hover:text-green-500 transition delay-150 duration-300 ease-in-out" />
            </div>
          </div>
          <div className="flex w-[70px] justify-between text-[20px] text-gray-500 cursor-pointer">
            <div>
              <IoMdHeartEmpty />
            </div>
            <div>
              <FiUser />
            </div>
            <div>
              <CiShoppingCart />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-[#0aad0a] text-[white] flex items-center px-[28px] py-[8px] rounded cursor-pointer">
            <TbCategory className="mr-2" />{" "}
            <span className="text-[18px] font-medium">All Category</span>
          </div>
          <ul className="flex gap-4">
            <li className="flex items-center gap-2 font-medium text-gray-700 ">
              Home <FaChevronDown />
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-700 ">
              Mega menu <FaChevronDown />
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-700 ">
              About us <FaChevronDown />
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-700 ">
              Contact us <FaChevronDown />
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-700 ">
              Account <FaChevronDown />
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-10  mb-[70px] " />
    </>
  );
};

export default Navbar;
