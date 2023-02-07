import React, { useState } from "react";
import { FaCartArrowDown, FaRegHeart, FaStar } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { FiMinus, FiPhoneCall, FiPlus } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Button from "../Button/Button";
import TopSellingProducts from "../TopSellingProducts/TopSellingProducts";
import BenefitAndFeature from "../BenefitAndFeature/BenefitAndFeature";
import HowToUse from "../HowToUse/HowToUse";
import LoginModal from "../LoginModal/LoginModal";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [toggle, setToggle] = useState(1);
  const [openModal, setOpenModal] = useState(false)
  const product = useLoaderData();
  const { _id, image, name, description, ingradients, volume, price } = product;
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

  const call = <FiPhoneCall />;
  const headPhone = <TfiHeadphoneAlt />;
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
        <div className="col-span-8">
          <div className="bg-white px-4 py-6 shadow-sm">
            <div className="border-b-2 pb-2">
              <NavLink
                onClick={() => setToggle(1)}
                className="mr-5 hover:border-b-2 pb-2 hover:border-yellow-400"
              >
                Benefits & Features
              </NavLink>
              <NavLink
                onClick={() => setToggle(2)}
                className="mr-5 hover:border-b-2 pb-2 hover:border-yellow-400"
              >
                How to use
              </NavLink>
            </div>
            <div className="bg-white mt-5">
              <div className={`${toggle === 1 ? "block" : "hidden"}`}>
                <BenefitAndFeature></BenefitAndFeature>
              </div>
              <div className={`${toggle === 2 ? "block" : "hidden"}`}>
                <HowToUse></HowToUse>
              </div>
            </div>
          </div>
          <div className="px-4 py-6 mt-4 bg-white">
            <div className="border-b-2 pb-3 mb-10">
              <h3 className="text-2xl font-medium">Questions about this product</h3>
              <p>Login to ask questions</p>
            </div>
              <p className="text-gray-400 text-center mb-3">There have been no question for this product yet.</p>
              <label onClick={()=> setOpenModal(true)} htmlFor="login-modal" className="bg-pink-500 px-4 py-2 hover:bg-pink-600 rounded-sm text-white cursor-pointer">Ask a Question</label>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white p-2 shadow">
            <p className="border-b-2 text-gray-500">
              <small>Contact us</small>
            </p>
            <div className="flex gap-x-4 mt-5 mb-2">
              <Button name={"callme"} icon={call}></Button>
              <Button name={"ask"} icon={headPhone}></Button>
            </div>
          </div>
          <div className="bg-white shadow p-2 mt-3">
            <h1 className="border-b-2 pb-2">Top Selling Products</h1>
            <div>
              <TopSellingProducts />
            </div>
          </div>
        </div>
      </div>
      { openModal && 
        <LoginModal setOpenModal={setOpenModal}></LoginModal>
      }
    </div>
  );
};

export default ProductDetails;
