import React, { useEffect, useState } from "react";
import TreatmentItem from "./TreatmentItem";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  useEffect(() => {
    fetch("treatments.json")
      .then((res) => res.json())
      .then((data) => setTreatments(data));
  }, []);
  return (
    <div className="lg:w-[1350px] mx-auto py-10 mb-24">
        <h1 className="mx-auto font-bold text-2xl py-2 px-4 text-center text-opacity-75 hover:text-opacity-100 border lg:w-[450px] shadow-inner hover:shadow-gray-500 duration-500 cursor-pointer">
        TREATMENTS BY SKIN CONCERN
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 shadow-lg gap-y-40 px-3 bg-gray-50 lg:p-10 lg:pb-14 rounded">
        {treatments.map((treatment) => (
          <TreatmentItem key={treatment.id} treatment={treatment}></TreatmentItem>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
