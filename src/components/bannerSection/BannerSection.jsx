import React from "react";
import slide1 from "../../assets/slide1.jpeg";
import { FaArrowRight } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <div
      className="bg-cover max-w-7xl mx-auto h-[480px] my-[30px] rounded flex items-center"
      style={{ backgroundImage: `url(${slide1})` }}
    >
      <div className="max-w-[360px] ml-12 ">
        <span className="bg-yellow-500 text-[13px] px-2 py-1 font-semibold rounded-lg">Opening Sale Discount 50%</span>
        <h1 className="font-[700] mt-[16px] mb-[8px] text-[44px] leading-[48px]">SuperMarket For Fresh Grocery</h1>
        <p className="font-semibold text-gray-500 mb-[12px]">
          Introduced a new model for online grocery shopping and convenient home
          delivery.
        </p>
        <button className="flex items-center bg-black rounded-md text-white px-6 py-2">
          Shop Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
