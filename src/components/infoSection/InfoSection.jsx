import React from "react";
import { CiClock2, CiGift } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { LiaExchangeAltSolid } from "react-icons/lia";

const InfoSection = () => {
  return (
    <div className="mb-[70px] max-w-7xl mx-auto flex justify-between md:px-4 sm:flex-col sm:items-center sm:gap-10 sm:px-2">
      <div className="w-[300px] sm:w-[240px]">
        <CiClock2 className="text-green-500 text-5xl mb-4" />
        <h1 className="text-[20px] font-semibold mb-1">
          10 minute grocery now
        </h1>
        <p className="text-gray-500 text-[16px]">
          Get your order delivered to your doorstep at the earliest from
          FreshCart pickup stores near you.
        </p>
      </div>
      <div className="w-[300px] sm:w-[240px]">
        <CiGift className="text-green-500 text-5xl mb-4" />
        <h1 className="text-[20px] font-semibold mb-1">Best Prices & Offers</h1>
        <p className="text-gray-500 text-[16px]">
          Cheaper prices than your local supermarket, great cashback offers to
          top it off. Get best pricess & offers.
        </p>
      </div>
      <div className="w-[300px] sm:hidden">
        <BsBoxSeam className="text-green-500 text-[45px] mb-4" />
        <h1 className="text-[20px] font-semibold mb-1">Wide Assortment</h1>
        <p className="text-gray-500 text-[16px]">
          Choose from 5000+ products across food, personal care, household,
          bakery, veg and non-veg & other categories.
        </p>
      </div>
      <div className="w-[300px] sm:hidden">
        <LiaExchangeAltSolid className="text-green-500 text-[45px] mb-4" />
        <h1 className="text-[20px] font-semibold mb-1">Easy Returns</h1>
        <p className="text-gray-500 text-[16px]">
          Not satisfied with a product? Return it at the doorstep & get a refund
          within hours. No questions asked policy.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
