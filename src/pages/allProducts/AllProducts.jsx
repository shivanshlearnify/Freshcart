import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import GetAllProduct from "../../hooks/GetAllProduct";
import Shimmer from "../../components/shimmer/Shimmer";

const AllProducts = () => {
  const [skipData, setSkipData] = useState(0);
  const { data, loading } = GetAllProduct(skipData);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 400
    ) {
      setSkipData((prev) => {
        if (prev >= 180) return prev;
        return prev + 20;
      });
    }
  };
  const myThrottle = (cb, dtime) => {
    let timer = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - timer < dtime) return;
      timer = now;
      cb(...args);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", myThrottle(handleScroll, 200));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-[60px] mb-[70px] ">
      <div className="flex flex-wrap gap-6 justify-around">
        {loading ? (
          <Shimmer count={20} />
        ) : (
          data.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              rating={product.rating}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllProducts;
