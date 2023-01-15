import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="lg:w-[1350px] mx-auto py-10">
      <h1 className="mx-auto font-bold text-2xl py-2 px-4 text-center text-opacity-75 hover:text-opacity-100 border w-72 shadow-inner hover:shadow-gray-500 duration-500 cursor-pointer">
        Products Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 px-3 lg:p-10 lg:pb-14  bg-slate-50 rounded shadow-2xl">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
