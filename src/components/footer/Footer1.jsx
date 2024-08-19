import { useContext } from "react";
import DataContext from "../../utils/DataContext";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaCcAmazonPay, FaApplePay, FaCcPaypal, FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Footer1 = () => {
  const { categoryData } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="bg-[#f0f3f2]">
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex justify-between md:justify-around sm:grid sm:grid-cols-2 sm:px-4 sm:gap-6">
          <div className="md:hidden sm:hidden">
            <h2 className="font-semibold">Categories</h2>
            <div>
              <ul className="grid grid-cols-2 gap-x-20	">
                {categoryData?.map((categoryname, index) => (
                  <Link
                    className="text-transform: capitalize text-[#5c6c75] hover:text-green-500"
                    key={index}
                    to={"/Product-Category/" + categoryname}
                  >
                    {categoryname}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">Get to know us</h2>
            <ul>
              <li className="text-[#5c6c75] cursor-pointer" onClick={()=>navigate("/about")}>Company</li>
              <Link to={"/about"} className="text-[#5c6c75]">
                About
              </Link>
              <li className="text-[#5c6c75] cursor-pointer" onClick={()=>navigate("/about")}>Blog</li>
              <li className="text-[#5c6c75] cursor-pointer" onClick={()=>navigate("/ContactUs")}>Help Center</li>
              <li className="text-[#5c6c75] cursor-pointer" onClick={()=>navigate("/about")}>Our Value</li>
            </ul>
          </div>
          
        </div>
        <div className="border-t-2 my-4"></div>
        <div className="flex justify-between my-8 items-center md:justify-around md:flex-col md:gap-10 sm:flex-col">
          <div className="flex gap-3 font-semibold items-center">
            Payment Partners
            <div className="flex gap-4 text-4xl">
              <FaCcAmazonPay />
              <FaApplePay />
              <FaCcPaypal />
            </div>
          </div>
          <div className="flex gap-4 items-center sm:flex-col">
            <h2 className=" text-3xl text-gray-500 font-bold">Available On </h2>
            <div className="bg-black text-white flex justify-center items-center rounded-md gap-2 w-[200px] h-[60px] text-[30px] p-2 hover:bg-green-600 cursor-pointer">
              <FaApple className="text-white" />
              App Store
            </div>
            <div className="bg-black text-white flex justify-center items-center rounded-md gap-2 w-[200px] h-[60px] text-[28px] p-2 hover:bg-green-600 cursor-pointer">
              <BiLogoPlayStore className="text-white" />
              Google Play
            </div>
          </div>
        </div>
        <div className="border-t-2 my-4"></div>
        <div className="flex justify-between md:justify-around sm:flex-col sm:items-center sm: px-5 sm:gap-8">
          <div>
            Copyright 2024 © FreshCart . All rights reserved. Powered by &nbsp;
            <a
              href="https://github.com/shivanshlearnify"
              target="_blank"
              className="text-green-500"
            >
              ShivanshLeanify.
            </a>
          </div>
          <div className="flex gap-2 text-2xl ">
            <a href="https://github.com/shivanshlearnify" target="_blank">
              <FaGithub className="hover:text-green-500 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivansh-kesarwani/"
              target="_blank"
            >
              <IoLogoLinkedin className="hover:text-green-500 cursor-pointer" />
            </a>
            <a href="https://x.com/ShivanshKesarw7" target="_blank">
              <FaTwitter className="hover:text-green-500 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
