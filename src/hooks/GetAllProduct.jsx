import { useEffect, useState } from "react";

const GetAllProduct = (skip) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://dummyjson.com/products?limit=20&skip=${skip}`;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const jsonData = await fetch(url);
        const fetchData = await jsonData.json();
        const productData = fetchData?.products;
        setData((prev) => [...prev, ...productData]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [skip]);

  return { data, loading };
};
export default GetAllProduct;
