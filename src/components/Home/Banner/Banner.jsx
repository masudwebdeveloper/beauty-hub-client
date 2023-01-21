import React from "react";
import bannerOne from "../../../assets/images/banner-photo-one.jpg";
import bannerTwo from "../../../assets/images/banner-photo-two.jpg";
import { Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <main className="">
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => console.log()}
        onSlideChange={() => console.log()}
      >
        <SwiperSlide>
          <section
            style={{ backgroundImage: `url(${bannerOne})` }}
            className="md:h-[70vh] md:bg-contain bg-no-repeat"
          >
            <div className="lg:w-[1350px] h-full flex mx-auto items-center justify-start">
              <div>
                <h4 className="font-extralight text-xs md:text-md lg:text-2xl md:mb-3">
                  Worried About Your Skin?
                </h4>
                <h1 className="text-xs md:text-2xl lg:text-5xl uppercase font-normal md:font-bold text-[#EC4899]">
                  Beauty-hub <br /> <span>skin care Treatment</span>
                </h1>
                <h2 className="font-extralight text-xs lg:text-3xl mt-0 md:mt-7">
                  Don't Worry, we got you?
                </h2>
                <button className="font-2xl px-4 py-2 bg-pink-500 opacity-75 hover:opacity-100 text-white rounded-sm mt-7">
                  Explore More
                </button>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            style={{ backgroundImage: `url(${bannerTwo})` }}
            className="md:h-[70vh] bg-contain md:bg-cover bg-no-repeat"
          >
            <div className="lg:w-[1350px] h-full flex mx-auto items-center justify-start">
              <div>
                <h4 className="font-extralight text-sm md:text-md lg:text-2xl mb-3">
                  What's Your Skin Concern?
                </h4>
                <h1 className="text-md md:text-2xl lg:text-5xl uppercase font-bold text-[#EC4899]">
                  Personalized <br /> <span>Treatment</span>
                </h1>
                <h2 className="font-extralight text-sm lg:text-3xl mt-7">
                  Premium Solution For Skin
                </h2>
                <button className="font-2xl px-4 py-2 bg-pink-500 opacity-75 hover:opacity-100 text-white rounded-sm mt-7">
                  Explore More
                </button>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Banner;
