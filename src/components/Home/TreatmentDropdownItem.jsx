import React from "react";
import { Link } from "react-router-dom";
// import decosmatic from '../../assets/images/Dermo-Cosmetics--570X570.jpg'

const TreatmentDropdownItem = () => {
  return (
    <div className="flex items-center gap-x-5">
      <div
        style={{
          backgroundImage: `url('images/Dermo-Cosmetics--570X570.jpg')`,
        }}
        className="w-64 h-64 bg-contain bg-no-repeat"
      >
        <div className="bg-[rgba(0,0,0,0.7)] w-full h-full flex flex-1 opacity-100 justify-center items-center">
          <div>
            <h3 className="text-2xl font-bold z-30">
              BIOXIN
              <br />
              RECOMMENDS
            </h3>
            <p className="text-sm">Shop All Skin Care Products</p>
            <Link
              href="#_"
              class="inline-block px-3 py-2 text-lg font-medium text-center text-white transition duration-300 rounded-md hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 w-auto mt-2"
            >
              view all
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ul className="py-3 text-gray-900">
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>HAIR REGROWTH</Link>
          </li>
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>SKIN LIFTING & TIGHTENING</Link>
          </li>
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>SLIMMING & FITNESS SOLUTION</Link>
          </li>
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>UNWANTED HAIR REMOVAL</Link>
          </li>
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>ANTI AGING TREATMENT</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="py-3 text-gray-900">
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>MOLE & SKIN TAG REMOVAL</Link>
          </li>
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>ACNE CURE</Link>
          </li>
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>SPOT & SCAR TREATMENTS</Link>
          </li>
          <li className="opacity-75 hover:opacity-100 transition duration-300 mb-4">
            <Link>WHITENING & BRIGHTENING</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TreatmentDropdownItem;
