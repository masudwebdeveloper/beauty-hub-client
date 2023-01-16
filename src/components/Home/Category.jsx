import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { img, name } = category;
  return (
    <Link>
      <div className="relative group">
        <img className="rounded-t group-hover:scale-110 duration-500" src={img} alt="" />
        <div className="absolute group-hover:scale-110 -bottom-10 bg-gradient-to-t from-gray-800 opacity-90 transition group-hover:-translate-y-10 origin-top duration-500 w-full h-[50%]"></div>
        <h1 className="text-slate-50 absolute group-hover:scale-110 -bottom-7 group-hover:-translate-y-10 origin-top duration-500 left-0 text-center w-full">{name}</h1>
      </div>
    </Link>
  );
};

export default Category;
