import React, { useState, useEffect } from "react";
import AddProductModal from "./AddProductModal";

const Products = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/getProducts");
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mx-auto py-8">
        {currentItems ? (
          <>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Description</th>
                  <th className="py-3 px-6 text-center">Price</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {currentItems.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {product.description}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {product.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              {[...Array(Math.ceil(data?.length / itemsPerPage))].map(
                (item, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white text-blue-500"
                    } border border-blue-500 rounded-full px-4 py-2 mx-2`}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <div>
        <AddProductModal />
      </div>
    </>
  );
};

export default Products;
