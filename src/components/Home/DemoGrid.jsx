import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./DemoGrid.module.css";

// import required modules
import { Grid, Pagination } from "swiper";

export default function DemoGrid() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
          fill: "row"
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-gray-500 ">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-gray-500 ">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-gray-500 ">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-gray-500 ">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-gray-500 ">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-gray-500 ">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-gray-500 ">Slide 7</SwiperSlide>
        <SwiperSlide className="bg-gray-500 ">Slide 8</SwiperSlide>
        <SwiperSlide className="bg-gray-500 ">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
