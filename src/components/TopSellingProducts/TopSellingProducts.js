import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import TopSellingProduct from "./TopSellingProduct";

const TopSellingProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: products = [] } = useQuery({
    queryKey: ["special-offer"],
    queryFn: async () => {
      setIsLoading(true);
      const res = await fetch(`http://localhost:5000/products/special-offer`);
      const data = await res.json();
      setIsLoading(false);
      return data;
    },
  });
  return (
    <div className="flex flex-col gap-y-5 my-5">
      {products?.slice(0,5).map((product) => (
        <TopSellingProduct
          key={product._id}
          product={product}
          isLoading={isLoading}
        ></TopSellingProduct>
      ))}
    </div>
  );
};

export default TopSellingProducts;
