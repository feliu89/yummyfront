import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/getProducts");
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return <div>{JSON.stringify({ data })}</div>;
};

export default Products;
