import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const resp = await axios.get(API);
    setProducts(resp.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return products;
};

export { useGetProducts };
