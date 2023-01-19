import React from "react";

const TreatmentItem = ({ treatment }) => {
  const { img, name, title } = treatment;
  return (
    <div
        className="relative"
      >
        <img className="opacity-75 cursor-pointer hover:opacity-100 duration-300" src={img} alt="" />
        <div className="absolute w-[90%] h-[90%] left-[5%] -bottom-32 bg-slate-200 p-5 rounded shadow-md">
          <h1 className="text-[#EC4899] font-semibold cursor-pointer opacity-80 hover:opacity-100 duration-300 text-2xl ">{name}</h1>
          <p className="text-gray-500 my-5 text-sm">{title}</p>
          <button className="absolute bottom-3 left-16 rounded hover:text-gray-50 hover:bg-gray-500 px-4 py-2 bg-pink-500 font-semibold">
            View Details
          </button>
        </div>
      </div>
  );
};

export default TreatmentItem;
