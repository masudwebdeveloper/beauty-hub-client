import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Grid, Pagination } from "swiper";

import { SwiperSlide, Swiper } from "swiper/react";
import NewArrivalLeft from "./NewArrivalLeft";
import NewArrivalRight from "./NewArrivalRight";
import Carousel from "react-grid-carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
// import "./NewArrival.css";

const NewArrival = () => {
  // const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  // useEffect(() => {
  //   fetch("newarrivalproducts.json")
  //     .then((res) => res.json())
  //     .then((data) => setNewArrivalProducts(data));
  // }, []);
  const {data: newArrivalProducts = [], refetch} = useQuery({
    queryKey: ['subcategory'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/new-arrival-products/new-arrival')
      const data = await res.json();
      return data;
    }
  })
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
    <div className="lg:max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center pb-10">
      <div className="col-span-2">
        <h1 className="text-center text-4xl font-semibold">New Arrival</h1>
        <div className="pt-10">
          <Swiper
            // install Swiper modules
            // navigation={true}
            modules={[Pagination, A11y, Autoplay, Grid]}
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
        <Carousel cols={3} rows={2} gap={10} loop autoplay={3000}>
          {newArrivalProducts.map((product) => (
            <Carousel.Item>
              <NewArrivalRight
                key={product.id}
                product={product}
              ></NewArrivalRight>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default NewArrival;
