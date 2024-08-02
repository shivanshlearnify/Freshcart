import { useContext } from "react";
import DataContext from "../../utils/DataContext";
import ProductCard from "../ProductCard";

const PopularProducts = () => {
  const { productData } = useContext(DataContext);
  return (
    <div className="max-w-7xl mx-auto mt-[60px] mb-[70px] ">
      <h1 className="mb-4 text-[28px] font-bold text-2xl">Popular Products</h1>
      <div className="flex flex-wrap gap-6 justify-around">
        {productData?.products?.slice(0,15).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.images[0]}
            title={product.title}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
export default PopularProducts;
