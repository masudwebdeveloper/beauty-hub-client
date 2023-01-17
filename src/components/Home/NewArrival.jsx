import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { SwiperSlide, Swiper } from "swiper/react";
import NewArrivalLeft from "./NewArrivalLeft";
import NewArrivalRight from "./NewArrivalRight";

const NewArrival = () => {
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  useEffect(() => {
    fetch("newarrivalproducts.json")
      .then((res) => res.json())
      .then((data) => setNewArrivalProducts(data));
  }, []);

  const newProducts = [
    {
      id: 1,
      img: "https://i.ibb.co/ZJct9gb/new-product-2.webp",
      name: "Novaclear Expert Protechting Cream spf 50+",
    },
    {
      id: 2,
      img: "https://i.ibb.co/LdmVwZp/new-product-1.webp",
      name: "Novaclear Expert Protechting Cream spf 50+",
    },
  ];
  return (
    <div className="w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="col-span-2 p-10">
        <h1 className="text-center text-2xl">New Arrival</h1>
        <div className="p-10">
          <Swiper
            // install Swiper modules
            // navigation={true}
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="">
              {newProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <NewArrivalLeft product={product}></NewArrivalLeft>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="col-span-3">
        <Swiper
          // install Swiper modules
          navigation={true}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="">
            {newArrivalProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <NewArrivalRight product={product}></NewArrivalRight>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrival;
