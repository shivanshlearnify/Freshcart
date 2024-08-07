import React from "react";
import slide1 from "../../assets/slide1.jpeg";
import { FaArrowRight } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <div
      className="bg-cover max-w-7xl mx-auto h-[480px] mb-[70px] rounded flex items-center sm:mt-28 sm:h-[200px] sm:mx-1 md:mx-2"
      style={{ backgroundImage: `url(${slide1})` }}
    >
      <div className="max-w-[360px] ml-12 sm:max-w-[260px] sm:ml-6">
        <span className="bg-yellow-500 text-[13px] px-2 py-1 font-semibold rounded-lg sm:text-[10px]">Opening Sale Discount 50%</span>
        <h1 className="font-[700] mt-[16px] mb-[8px] text-[44px] leading-[48px] sm:text-[25px] sm:leading-[30px] sm:my-1">SuperMarket For Fresh Grocery</h1>
        <p className="font-semibold text-gray-500 mb-[12px] sm:text-sm sm:mb-1">
          Introduced a new model for online grocery shopping and convenient home
          delivery.
        </p>
        <button className="flex items-center bg-black rounded-md text-white px-6 py-2 sm:px-2 sm:py-1">
          Shop Now &nbsp;<FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
