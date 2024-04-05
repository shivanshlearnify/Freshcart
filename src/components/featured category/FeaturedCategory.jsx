import React from "react";
import img1 from "../../assets/categoryImages/category1.jpeg";
import img2 from "../../assets/categoryImages/category2.jpeg";
import img3 from "../../assets/categoryImages/category3.jpeg";
import img4 from "../../assets/categoryImages/category4.jpeg";
import img5 from "../../assets/categoryImages/category5.jpeg";
import img6 from "../../assets/categoryImages/category6.jpeg";

const FeaturedCategory = () => {
  const category = [
    { img: img1, name: "Dairy, Bread & Eggs" },
    { img: img2, name: "Snack & Munchies" },
    { img: img3, name: "Bakery & Biscuits" },
    { img: img4, name: "Instant Food" },
    { img: img5, name: "Tea, Coffee & Drinks" },
    { img: img6, name: "Atta, Rice & Dal" },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-[60px] mb-16">
      <h1 className="text-[28px] font-bold mb-4">Featured Categories</h1>
      <div className="flex justify-between gap-3">
        {category.map((item, index) => (
          <div className=" border py-8 px-7 flex flex-col items-center rounded gap-2">
            <img src={item.img} alt="" />
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
