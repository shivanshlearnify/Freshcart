import React from "react";
import img1 from "../../assets/Categorybanners/banner1.png";
import img2 from "../../assets/Categorybanners/banner2.jpeg";

const CategoryBanner = () => {
  return (
    <div className="max-w-7xl mx-auto flex mb-[70px] justify-between ">
      <div
        className="w-[620px] h-[200px] bg-cover rounded p-10"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <h1 className="font-[700] mb-[1px] text-[24px]">
          Fruits & Vegetables
        </h1>
        <p className="font-semibold text-gray-500 mb-[14px]">
          Get Upto 30% off
        </p>
        <button className="flex items-center bg-black rounded-md text-white px-6 py-2">
          Shop Now
        </button>
      </div>
      <div
        className="w-[620px] h-[200px] bg-cover rounded p-10"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <h1 className="font-[700] mb-[1px] text-[24px]">
        Freshly Baked Buns
        </h1>
        <p className="font-semibold text-gray-500 mb-[14px]">
          Get Upto 25% off
        </p>
        <button className="flex items-center bg-black rounded-md text-white px-6 py-2">
          Shop Now
        </button>
      </div>
      
    </div>
  );
};

export default CategoryBanner;
