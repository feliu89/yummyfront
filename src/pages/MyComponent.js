import React, { useState, useEffect } from "react";

export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return <div>{data && <p>{data.name}</p>}</div>;
}
