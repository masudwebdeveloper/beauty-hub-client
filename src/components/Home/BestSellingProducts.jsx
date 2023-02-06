import React from "react";
import { A11y, Autoplay, Grid, Pagination } from "swiper";

import { SwiperSlide, Swiper } from "swiper/react";
import Carousel from "react-grid-carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import BestSellingProductLeft from "./BestSellingProductLeft";
import BestSellingProductRight from "./BestSellingProductRight";
import { useQuery } from "@tanstack/react-query";

const BestSellingProducts = () => {
  const {data: subcategoryProducts = [], refetch} = useQuery({
    queryKey: ['subcategory'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/products/best-selling')
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
    <div className="lg:max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center py-10">
      <div className="col-span-3">
        <Carousel cols={3} rows={2} gap={10} loop autoplay={3000}>
          {subcategoryProducts.map((product) => (
            <Carousel.Item>
              <BestSellingProductLeft
                key={product.id}
                product={product}
              ></BestSellingProductLeft>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="col-span-2">
        <h1 className="text-center text-4xl font-semibold">Best Selling</h1>
        <div className=" pt-10">
          <Swiper
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
                  <BestSellingProductRight product={product}></BestSellingProductRight>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
