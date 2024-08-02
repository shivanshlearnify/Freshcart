import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../utils/DataContext";
import ProductCard from "../../components/ProductCard";
import DataFetcher from "../../hooks/DataFetcher";
import Shimmer from "../../components/Shimmer";

const ProductCategory = () => {
  const { Category } = useParams();
  const { categoryData } = useContext(DataContext);

  const { data: categoryProductData, loading: categoryProductLoading } =
    DataFetcher(`https://dummyjson.com/products/category/${Category}`);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-transform: capitalize mb-4">
        <span className="text-green-500 font-medium"> Home</span>{" "}
        <span className="text-gray-500"> / {Category}</span>
      </div>
      <div className="mb-14 flex gap-5">
        <div className="w-1/5">
          <h2 className="text-xl font-medium mb-2">Categories</h2>
          {categoryData?.map((categoryname, index) => {
            return (
              <div key={index}>
                <Link
                  className="text-transform: capitalize text-[#5c6c75] font-medium"
                  to={"/Product-Category/" + categoryname}
                >
                  {categoryname}
                </Link>
                <hr className="my-1" />
              </div>
            );
          })}
        </div>
        <div className="w-4/5">
          <div className="text-transform: capitalize bg-[#f0f3f2] w-full h-40 rounded-md p-12 text-gray-500 text-5xl font-semibold mb-4">
            {Category}
          </div>
          {categoryProductLoading ?  <Shimmer/> :
          <div className="flex flex-wrap gap-[24px]">
            {categoryProductData?.products?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                rating={product.rating}
                price={product.price}
              />
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
