import React, { useState } from "react";
import logo from "../../assets/images/logo-one.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { TbPhone } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GrFormLocation } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";
import user from "../../assets/images/user.png";
import category from "../../assets/images/category.png";
import register from "../../assets/images/register.png";
import order from "../../assets/images/order.png";

import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import DropdownItem from "../share/DropdownItem";
import "./Navbar.modules.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(false);
  const [opsion, setOpsion] = useState(false);
  return (
    <section className="max-w-[1350px] mx-auto">
      <div className="hidden md:block">
        <div
          className={` ${open ? "h-0" : "h-10"} duration-500 origin-top ${
            open ? "-translate-y-14" : "translate-y-2"
          } flex justify-center items-center gap-x-5`}
        >
          <img src={logo} alt="" className="w-40 h-10 rounded-full" />
          <h2 className="text-2xl font-extrabold text-gray-600 uppercase">
            Download the beauty hub app & Discover your true beauty
          </h2>
          <button className="py-3 px-6 bg-pink-500 opacity-80 hover:opacity-100 font-semibold hover:scale-x-105 duration-500 text-gray-200 rounded-full">
            Download Now
          </button>
        </div>
        <button
          className={`z-10 w-10 h-7 border-t-2 bg-slate-100 border-b-2 border-l-2 border-r-2 flex items-center justify-center absolute right-5 ${
            open ? "top-0" : "top-5"
          } duration-500`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoIosArrowDown className="font-bold text-2xl text-gray-900 duration-500"></IoIosArrowDown>
          ) : (
            <VscClose className="font-bold text-2xl text-gray-900 duration-500"></VscClose>
          )}
        </button>
      </div>
      <div
        className={`hidden md:block ${
          open ? "top-0" : "top-10 mt-5 translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-">
            <TbPhone className="inline mr-2"></TbPhone>
            <small>help line 01755 667788</small>
          </div>
          <ul className="flex items-center">
            <li className="border-r-2 px-3">
              <Link>
                <small>about us</small>
              </Link>
            </li>
            <li className="border-r-2 px-3">
              <Link>
                <small>contact us</small>
              </Link>
            </li>
            <li className="border-r-2 px-3">
              <Link>
                <small>Beauty-hub location</small>
              </Link>
              <GrFormLocation className="inline text-md"></GrFormLocation>
            </li>
            <li className="border-r-2 px-3">
              <Link>
                <small>Your location</small>
              </Link>
              <GrFormLocation className="inline text-md"></GrFormLocation>
            </li>
            <li className="border-r-2 px-3">
              <Link>
                <small>News & Events</small>
              </Link>
            </li>
            <li className="border-r-2 px-3">
              <Link>
                <small>Career</small>
              </Link>
            </li>
            <li className="border-r-2 px-3">
              <Link>
                <small>Login</small>
              </Link>
            </li>
            <li className="px-3">
              <Link>
                <small>Registation</small>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <header className="sticky top-0 z-30 flex w-full items-center justify-center bg-[#00131E] p-4 mt-2">
        <div className="flex items-center justify-center md:w-1/5">
          <Link href="/">
            <div className="relative cursor-pointer w-40 h-full text-left opacity-100 transition hover:opacity-100">
              <img alt="hello" src={logo} layout="fill" objectFit="contain" />
            </div>
          </Link>
        </div>
        <div className={`dropdown-menu ${opsion ? "active" : "inactive"}`}>
          <h3 className="dropdown-title">
            Masud Rana <br />
            <span>Web Develper</span>
          </h3>
          <ul>
            <DropdownItem img={user} text={"Login"} />
            <DropdownItem img={register} text={"Register"} />
            <DropdownItem img={category} text={"My Wallets"} />
            <DropdownItem img={order} text={"My Order"} />
          </ul>
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex text-slate-50">
          <Link className="cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            Skin Care
          </Link>
          <Link className="cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            Treatment
          </Link>
          <Link className="cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            Special Offer
          </Link>
          <Link className="cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            New Arrival
          </Link>
          <Link className="bg-pink-500 py-2 px-4 rounded-md hover:-translate-y-1 origin-top duration-500 cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            Appointment
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-4 md:w-1/5 text-slate-50">
          <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer opacity-75 transition hover:opacity-100"></MagnifyingGlassIcon>
          <Link href="/checkout">
            <div className="relative cursor-pointer">
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                5
              </span>
              <ShoppingBagIcon className="w-6 h-6 cursor-pointer opacity-75 transition hover:opacity-100"></ShoppingBagIcon>
            </div>
          </Link>
          {session ? (
            <img src="" alt="" />
          ) : (
            <UserIcon
              className="w-6 h-6 cursor-pointer opacity-75 transition hover:opacity-100"
              // onClick={()=> signIn()}
              onClick={() => setOpsion(!opsion)}
            ></UserIcon>
          )}
        </div>
      </header>
    </section>
  );
};

export default Navbar;
