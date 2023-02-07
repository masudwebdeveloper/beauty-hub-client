import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopSellingProduct = ({ product, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Link to={`/`} className="flex gap-4">
      <div className="w-2/5">
        <img className="w-full" src={product.image} alt={product.name} />
      </div>
      <div>
        <h3 className="">
          <small>{product?.name}</small>
        </h3>
        <div className="flex gap-x-1 text-yellow-400">
          {[...Array(5).keys()].map((i) => (
            <div key={i}>
              <small>
                <FaStar></FaStar>
              </small>
            </div>
          ))}
        </div>
        <p className="text-pink-500">৳{product?.price}</p>
      </div>
    </Link>
  );
};

export default TopSellingProduct;
