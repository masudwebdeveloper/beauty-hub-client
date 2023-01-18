import React from "react";
import bannerOne from "../../../assets/images/dermo-background-img.jpg";

const DermoBanner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerOne})` }}
      className="h-[30vh] md:h-[70vh] bg-contain md:bg-cover bg-no-repeat"
    >
      <div className="lg:w-[1350px] h-full flex mx-auto items-center justify-start">
        <div>
          <h4 className="font-extralight text-sm md:text-md lg:text-2xl mb-3">
          Is bad skin affecting your daily life?
          </h4>
          <h1 className="text-md md:text-2xl lg:text-5xl uppercase font-bold text-[#EC4899]">
            DERMO
            <br /> <span>COSMETICS</span>
          </h1>
          <h2 className="font-extralight text-sm lg:text-3xl mt-7">
          Rebalance your skin
          </h2>
          <button className="font-2xl px-4 py-2 bg-pink-500 opacity-75 hover:opacity-100 text-white rounded-sm mt-7">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DermoBanner;
