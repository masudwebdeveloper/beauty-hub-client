import React from "react";
import { FaStar } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
const FeatureProduct = ({ product }) => {
  const { img, name, rating, price } = product;
  return (
    <div className="group cursor-pointer py-5 rounded-md overflow-hidden">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="p-2 px-4 bg-white shadow-md">
        <div className="flex gap-x-1">
          {[...Array(rating).keys()].map((i) => (
            <div key={i}>
              <small>
                <FaStar></FaStar>
              </small>
            </div>
          ))}
        </div>
        <p className="mb-5">
          <small>{name}</small>
        </p>
        <p className=" text-pink-500 font-bold">৳{price}</p>
        <button className="px-10 py-2 hover:bg-gray-500 hover:text-white bg-pink-400 mx-auto w-full transition-all rounded-sm duration-300">
          <GiShoppingCart className="inline mr-2"></GiShoppingCart>
          Buy Now
        </button>
      </div>
      <div className="absolute right-2 top-10 flex flex-col gap-y-2 translate-x-14 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 origin-left transition duration-500">
        <div className="w-10 h-10 rounded-full hover:scale-110 flex items-center justify-center bg-white">
          <AiOutlineHeart className="hover:scale-x-110"></AiOutlineHeart>
        </div>
        <div className="w-10 h-10 rounded-full hover:scale-110 flex items-center justify-center bg-white">
          <GiShoppingCart className="hover:scale-x-110"></GiShoppingCart>
        </div>
        
      </div>
    </div>
  );
};

export default FeatureProduct;
