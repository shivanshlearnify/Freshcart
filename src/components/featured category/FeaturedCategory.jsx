import React, { useRef, useState } from "react";
import img1 from "../../assets/categoryImages/category1.jpeg";
import img2 from "../../assets/categoryImages/category2.jpeg";
import img3 from "../../assets/categoryImages/category3.jpeg";
import img4 from "../../assets/categoryImages/category4.jpeg";
import img5 from "../../assets/categoryImages/category5.jpeg";
import img6 from "../../assets/categoryImages/category6.jpeg";
import { Link } from "react-router-dom";

const FeaturedCategory = () => {
  const category = [
    { img: img1, name: "Dairy, Bread & Eggs" },
    { img: img2, name: "Snack & Munchies" },
    { img: img3, name: "Bakery & Biscuits" },
    { img: img4, name: "Instant Food" },
    { img: img5, name: "Tea, Coffee & Drinks" },
    { img: img6, name: "Atta, Rice & Dal" },
  ];

  const [transform, setTransform] = useState(0);
  const widthRef = useRef();

  const moveRight = () => {
    setTransform((prev) => {
      if (prev > widthRef.current.clientWidth - widthRef.current.scrollWidth) {
        return prev - 218;
      } else {
        return prev;
      }
    });
  };

  const moveLeft = () => {
    setTransform((prev) => prev + 218);
  };

  return (
    <div className="relative max-w-7xl mx-auto mt-[60px] mb-[70px] sm:px-2 md:px-4">
      <h1 className="text-[28px] font-bold mb-4">Featured Categories</h1>
      <div ref={widthRef} className="flex gap-[28px] overflow-x-hidden ">
        {category.map((item, index) => (
          <div
            className="border py-8 px-4 flex flex-col items-center rounded gap-2 min-w-[190px] transition-transform delay-500"
            style={{ transform: `translateX(${transform}px)` }}
            key={index}
          >
            <Link to={"/Product-Category/groceries"}>
              <img src={item.img} alt="" />
              <span className="font-medium">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <button
        className={`font-medium text-2xl text-white bg-green-500 rounded-full w-8 h-8 absolute top-2/4 left-[-1px] lg:hidden ${
          transform ? "" : "opacity-50 cursor-not-allowed"
        }`}
        onClick={moveLeft}
        disabled={!transform}
      >
        &lt;
      </button>
      <button
        className={`font-medium text-2xl text-white bg-green-500 rounded-full w-8 h-8 absolute top-2/4 right-0 lg:hidden`}
        onClick={moveRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default FeaturedCategory;
