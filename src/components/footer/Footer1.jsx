import React from "react";

const allCategory = [
  "Vegetables & Fruits",
  "Dairy, bread & eggs",
  "Breakfast & instant food",
  "Cold drinks & juices",
  "Bakery & Biscuits",
  "Tea, coffee & drinks",
  "Atta, rice & dal",
  "Masala, oil & more",
  "Sauce & spreads",
  "Chicken, meat & fish",
  "Organic & gourmet",
  "Paan corner",
  "Baby care",
  "Pharma & wellness",
  "Cleaning essentials",
  "Home & office",
  "Personal care",
  "Pet care",
];

const Footer1 = () => {
  return (
    <div className="max-w-7xl mx-auto flex">
        <div>
            <h2>Categories</h2>
            <div>
            <ul className="grid grid-cols-2">
                {allCategory.map((categoryname, index) => (
                <li key={index}>{categoryname}</li>
                ))}
            </ul>
            </div>
        </div>
        <div>
            <h2>Get to know us</h2>
            <ul>
                <li>Company</li>
                <li>About</li>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Our Value</li>
            </ul>
        </div>
        <div>
            <h2>For Consumers</h2>
            <ul>
                <li>Payments</li>
                <li>Shipping</li>
                <li>Product Returns</li>
                <li>FAQ</li>
                <li>Shop Checkout</li>
            </ul>
        </div>
    </div>
  );
};

export default Footer1;
