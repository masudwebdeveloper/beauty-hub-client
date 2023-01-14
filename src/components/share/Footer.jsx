import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main className="bg-[#00131E]">
      <div className="md:w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 py-14">
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
      {/* <section className="flex flex-col md:flex-row gap-y-5 justify-between items-center">
        <div>
          <ul className="flex justify-center md:justify-start gap-x-4 mt-5">
            <li className="group">
              <div className="flex items-center justify-center w-10 h-10 group-hover:scale-100 group-hover:bg-[#3b5998] bg-slate-200 transition duration-500 rounded-full  shadow-2xl shadow-black">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-[#3b5998] group-hover:text-gray-50 duration-500"></FaFacebook>
                </a>
              </div>
            </li>
            <li className="group">
              <div className="flex items-center justify-center w-10 h-10 group-hover:scale-100 group-hover:bg-[#00acee] bg-slate-200 transition duration-500 rounded-full  shadow-2xl shadow-black">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-[#00acee] group-hover:text-gray-50 duration-500"></FaTwitter>
                </a>
              </div>
            </li>
            <li className="group">
              <div className="flex items-center justify-center w-10 h-10 group-hover:scale-100 group-hover:bg-[#d62976] bg-slate-200 transition duration-500 rounded-full  shadow-2xl shadow-black">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#d62976] group-hover:text-gray-50 duration-500"></FaInstagram>
                </a>
              </div>
            </li>
            <li className="group">
              <div className="flex items-center justify-center w-10 h-10 group-hover:scale-100 group-hover:bg-[#FF0000] bg-slate-200 transition duration-500 rounded-full  shadow-2xl shadow-black">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-[#FF0000] group-hover:text-gray-50 duration-500"></FaYoutube>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p>&#169; {update} All Rights reserved by OLDBazaar</p>
        </div>
        <div className="flex items-center gap-x-5">
          <p>Accept for</p>
          <div>
            <img src={paypal} alt="" />
          </div>
          <div>
            <img src={mastercard} alt="" />
          </div>
          <div>
            <img src={visacard} alt="" />
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Footer;
