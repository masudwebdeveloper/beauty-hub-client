import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#00131E] px-10 py-14">
      <div>
        <h2 className="text-[#d95156] font-bold text-2xl mb-5">About us</h2>
        <ul className="text-white">
          <li className="mb-2">
            <Link>
              <small>About Beauty-hub</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>News & Events</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>Skin Care Blog</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>Our Location</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>Contact Us</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>Submit Your Complain</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>Privacy Policy</small>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-[#d95156] font-bold text-2xl mb-5">My Account</h2>
        <ul className="text-white">
          <li className="mb-2">
            <Link>
              <small>Login</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>Order History</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>My Wishlist</small>
            </Link>
          </li>
          <li className="mb-2">
            <Link>
              <small>Track Order</small>
            </Link>
          </li>
          <li className="hover:text-white duration-300 mb-2 text-[#d95156]">
            <Link>
              <small>Earn Money</small>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-[#d95156] font-bold text-2xl mb-5">
          Find Our Brand Location
        </h2>
        <div>
          <p className="text-white mb-1">
            <small>We are open every day from 11AM to 8PM</small>
          </p>
          <div className="flex gap-x-10">
            <ul className="text-white">
              <li className="mb-2">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>DHANMONDI
                  </small>
                </Link>
              </li>
              <li className="mb-2">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>MIRPUR
                  </small>
                </Link>
              </li>
              <li className="mb-2">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>UTTARA
                  </small>
                </Link>
              </li>
              <li className="mb-2">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>SHANTINAGAR
                  </small>
                </Link>
              </li>
              <li className="hover:text-white duration-300 mb-2 text-[#d95156]">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>BASHUNDHARA CITY
                  </small>
                </Link>
              </li>
              <li className="hover:text-white duration-300 mb-2 text-[#d95156]">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>GAZIPUR
                  </small>
                </Link>
              </li>
            </ul>
            <ul className="text-white">
              <li className="mb-2">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>NARAYANGANJ
                  </small>
                </Link>
              </li>
              <li className="mb-2">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>SYLHET
                  </small>
                </Link>
              </li>
              <li className="mb-2">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>RAJSHAHI
                  </small>
                </Link>
              </li>
              <li className="mb-2">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>CHATTOGRAM
                  </small>
                </Link>
              </li>
              <li className="hover:text-white duration-300 mb-2 text-[#d95156]">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>WARI
                  </small>
                </Link>
              </li>
              <li className="hover:text-white duration-300 mb-2 text-[#d95156]">
                <Link>
                  <small>
                    <FaPlus className="inline mr-2"></FaPlus>BANANI
                  </small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2>About us</h2>
        <ul>
          <li>
            <Link>
              <small>About Beauty-hub</small>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
