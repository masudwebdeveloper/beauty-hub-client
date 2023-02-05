import React, { useState } from "react";
import { FaCartArrowDown, FaRegHeart, FaStar } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink, useLoaderData } from "react-router-dom";
import Button from "../Button/Button";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const product = useLoaderData();
  const { image, name, description, ingradients, volume, price } = product;
  console.log(product);
  const shopingBag = (
    <>
      <HiOutlineShoppingBag></HiOutlineShoppingBag>
    </>
  );
  const cart = (
    <>
      <FaCartArrowDown />
    </>
  );
  return (
    <div className="lg:max-w-[1350px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-10 p-3 gap-4 shadow bg-white">
        <div className="col-span-3 h-96">
          <img
            className="h-full w-full object-top"
            alt={name}
            src={image}
          ></img>
        </div>
        <div className="col-span-5">
          <h1>{name}</h1>
          <div className="flex justify-between border-b-2 pb-5">
            <div className="flex gap-x-1 items-center">
              {[...Array(5).keys()].map((i) => (
                <div key={i}>
                  <small>
                    <FaStar className="text-yellow-500"></FaStar>
                  </small>
                </div>
              ))}
              (5 Reviews)
            </div>
            <div className="flex gap-x-2">
              <span className="w-6 h-6 flex justify-center items-center border-2 cursor-pointer">
                <MdShare></MdShare>
              </span>
              <span className="w-6 h-6 flex justify-center items-center border-2 cursor-pointer">
                <FaRegHeart></FaRegHeart>
              </span>
            </div>
          </div>
          <div className="my-5 border-b-2 pb-6">
            <p>{description}</p>
            <div className="my-3">
              <strong>Active Ingradients: </strong>
              {ingradients?.map((ingredient) => (
                <span className="mr-2">
                  <small>
                    <BsCheck2Circle className="inline text-green-500 mr-1"></BsCheck2Circle>
                    {ingredient}
                  </small>
                </span>
              ))}
            </div>
            <div>
              <small>
                <span className="mr-5">Volume:</span>
                <span>{volume}</span>
              </small>{" "}
            </div>
            <div>
              <small>
                <span className="mr-5">Brand:</span>
                <span></span>
              </small>{" "}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <strong>
              <small>Quantity: </small>
            </strong>
            <div className="flex gap-8 items-center">
              <button
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                  quantity === 1 ? "cursor-not-allowed" : "hover:bg-gray-200"
                }`}
                onClick={() => setQuantity((current) => current - 1)}
                disabled={quantity === 1}
              >
                <FiMinus />
              </button>
              <p>{quantity}</p>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 border"
                onClick={() => setQuantity((pre) => pre + 1)}
              >
                <FiPlus />
              </button>
            </div>
          </div>
          <div className="flex gap-14 my-3">
            <strong>Total Price: </strong>
            <p className="font-bold text-pink-500">৳{price * quantity}</p>
          </div>
          <div className="flex gap-4 mb-3 mt-10">
            <Button name={"Add to Card"} icon={shopingBag}></Button>
            <Button name={"Buy Now"} icon={cart}></Button>
          </div>
        </div>
        <div className="px-2 bg-[#FAFAFA] max-h-60 col-span-2">
          <strong>Delivery Options</strong>
          <div className="px-3 border-b-2 pb-5">
            <span>
              <small>
                <BsCheck2Circle className="inline text-green-500 mr-1"></BsCheck2Circle>
                Inside Dhaka 1-2 day
              </small>
            </span>
            <br />
            <span>
              <small>
                <BsCheck2Circle className="inline text-green-500 mr-1"></BsCheck2Circle>
                Outside Dhaka 2-5 days
              </small>
            </span>
            <br />
            <span>
              <small>
                <BsCheck2Circle className="inline text-green-500 mr-1"></BsCheck2Circle>
                Cash on Delivery Available
              </small>
            </span>
          </div>
          <strong>Return & Warranty</strong>
          <div className="px-3 border-b-2 pb-5">
            <span>
              <small>
                <BsCheck2Circle className="inline text-green-500 mr-1"></BsCheck2Circle>
                100% Authentic products
              </small>
            </span>
            <br />
            <span>
              <small>
                <BsCheck2Circle className="inline text-green-500 mr-1"></BsCheck2Circle>
                Easy return
              </small>
            </span>
          </div>
          <strong className="mt-5">Speical Offer</strong>
        </div>
      </div>
      {/* this is product section below part*/}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 mt-5">
        <div>
            <NavLink></NavLink>
            <NavLink></NavLink>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
