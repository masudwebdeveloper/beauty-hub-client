import React, { useEffect, useState } from "react";
import { A11y, Controller, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import '../../Styles/FeatureProducts.module.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FeatureProduct from "./FeatureProduct";

const FeatureProducts = () => {
  const [featureProducts, setFeatureProducts] = useState([]);
  useEffect(() => {
    fetch("featureProducts.json")
      .then((res) => res.json())
      .then((data) => setFeatureProducts(data));
  }, []);

  return (
    <div className="lg:w-[1350px] mx-auto py-10">
      <h1 className="mx-auto font-bold text-2xl py-2 px-4 text-center text-opacity-75 hover:text-opacity-100 border w-72 shadow-inner hover:shadow-gray-500 duration-500 cursor-pointer">
        Feature Products
      </h1>
      <div>
        <Swiper
          // install Swiper modules
          navigation={true}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="">
            {featureProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <FeatureProduct product={product}></FeatureProduct>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureProducts;
