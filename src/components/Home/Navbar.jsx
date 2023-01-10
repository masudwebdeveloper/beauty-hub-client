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
import { GoEyeClosed } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import DropdownItem from "../share/DropdownItem";
import "./Navbar.modules.css";
import SkinCareDropdrownItem from "./SkinCareDropdrownItem";
import TreatmentDropdownItem from "./TreatmentDropdownItem";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(false);
  const [opsion, setOpsion] = useState(false);
  const [openField, setOpenField] = useState(false);
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
      <header className="sticky top-0 z-30 flex w-full items-center justify-center bg-[#00131E] mt-2">
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
        <div className="hidden flex-1 items-center justify-center md:flex text-slate-50">
          <Link className="group py-7 px-4 cursor-pointer transition opacity-75 hover:opacity-100 uppercase">
            Skin Care
            <div
              className={`absolute invisible group-hover:visible ease-in-out before:group-hover:visible opacity-0 group-hover:opacity-100 origin-bottom before:-z-30 duration-500  left-0 transition group-hover:-translate-y-0 translate-y-5 top-[80px] bg-gray-50 rounded-md w-3/5  before:w-5 before:h-5 before:bg-gray-50 shadow-2xl before:rotate-45 before:absolute before:-top-[10px] before:right-[49%] h-64`}
            >
              {/* <h3 className="dropdown-title">
                Masud Rana <br />
                <span>Web Develper</span>
              </h3> */}
              <div>
                <SkinCareDropdrownItem></SkinCareDropdrownItem>
              </div>
            </div>
          </Link>
          <Link className="group py-7 px-4 cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            Treatment
            <div
              className={`absolute invisible group-hover:visible ease-in-out before:group-hover:visible opacity-0 group-hover:opacity-100 origin-bottom before:-z-30 duration-500  left-[115px] transition group-hover:-translate-y-0 translate-y-5 top-[80px] bg-gray-50 rounded-md w-3/5  before:w-5 before:h-5 before:bg-gray-50 shadow-2xl before:rotate-45 before:absolute before:-top-[10px] before:right-[49%] h-64`}
            >
              {/* <h3 className="dropdown-title">
                Masud Rana <br />
                <span>Web Develper</span>
              </h3> */}
              <div>
                <TreatmentDropdownItem></TreatmentDropdownItem>
              </div>
            </div>
          </Link>
          <Link className="py-7 px-4 cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            Special Offer
          </Link>
          <Link className="py-7 px-4 cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            New Arrival
          </Link>
          <Link className="bg-pink-500 py-2 px-4 rounded-md hover:-translate-y-1 origin-top duration-500 cursor-pointer opacity-75 transition hover:opacity-100 uppercase">
            Appointment
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-4 md:w-1/5 text-slate-50">
          <MagnifyingGlassIcon
            onClick={() => setOpenField(!openField)}
            className="w-6 h-6 cursor-pointer opacity-75 transition hover:opacity-100"
          ></MagnifyingGlassIcon>
          <Link href="/checkout">
            <div className="relative cursor-pointer">
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
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
        <div
          className={`absolute overflow-hidden ${
            openField
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-96"
          } origin-left transition duration-1000`}
        >
          <div
            onClick={() => setOpenField(!openField)}
            className="absolute top-2 left-5 cursor-pointer w-10 h-10 flex items-center justify-center bg-slate-200 text-slate-900 hover:text-slate-100 hover:bg-slate-500 transition duration-1000 origin-left rounded-full"
          >
            <GoEyeClosed></GoEyeClosed>
          </div>
          <form action="">
            <input
              placeholder="Please your mind"
              type="text"
              name="search"
              id="search"
              className="w-[1350px] py-4 pr-5 pl-20"
            />
            <button
              type="submit"
              className="group absolute top-0 right-0 w-20 h-full flex items-center justify-center bg-pink-200 hover:bg-pink-500 text-slate-900 transition duration-500 translate-x-5 hover:-translate-x-0 origin-right"
            >
              <CiSearch className="font-bold group-hover:text-slate-50 text-3xl -translate-x-2 group-hover:translate-x-0 transition duration-500" />
            </button>
          </form>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
