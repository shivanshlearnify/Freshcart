import { useEffect, useState } from "react";

const DataFetcher = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const jsonData = await fetch(url);
          const fetchData = await jsonData.json();
          setData(fetchData);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
    fetchData();
  }, [url]);
  return { data, loading };
};

export default DataFetcher;
