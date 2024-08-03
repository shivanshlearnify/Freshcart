import logo from "../../assets/freshcart-logo.svg";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { TbCategory } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import DataContext from "../../utils/DataContext";

const Navbar = () => {
  const { categoryData } = useContext(DataContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto h-[100px]">
        <div className="flex items-center h-[75px] justify-between">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
          <div>
            <div className="flex  justify-between mx-auto border-2 border-gray-500 rounded items-center  ">
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
          <div
            className="bg-[#0aad0a] text-[white] flex items-center px-[28px] py-[8px] rounded cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TbCategory className="mr-2" />{" "}
            <span className="text-[18px] font-medium">All Category</span>
          </div>
          <ul className="flex gap-4">
            <Link
              to={"/"}
              className="flex items-center gap-2 font-medium text-gray-700 "
            >
              Home
            </Link>
            <li
              className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
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
            <Link className="flex items-center gap-2 font-medium text-gray-700 " to={"/AllProducts"}>All Products</Link>
          </ul>
        </div>
        {isHovered && (
          <div
            className="relative top-[1px] bg-white w-5/12 border rounded-lg p-4 shadow-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ul className="grid grid-cols-2 ">
              {categoryData?.map((categoryname, index) => (
                <Link
                  className="text-transform: capitalize text-[#5c6c75] hover:bg-slate-200 rounded-lg py-1 px-2 font-medium"
                  key={index}
                  to={"/Product-Category/" + categoryname}
                >
                  {categoryname}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <hr className="mt-10  mb-[30px] " />
    </>
  );
};

export default Navbar;
