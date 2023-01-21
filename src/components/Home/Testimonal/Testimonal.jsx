import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonal = () => {
  const testimonalData = [
    {
      id: 1,
      profile:
        "https://scontent.fdac11-1.fna.fbcdn.net/v/t1.6435-9/53671966_413056686169823_7282239607259791360_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF9S5RCgsjMYoXnrf2M2GdG-E4AvUuVmgb4TgC9S5WaBposFyvbrq-DnChs2nSTPILqNCbJanJQieEwByn76rrM&_nc_ohc=oSQp-Kf_YekAX9poSnk&tn=ryR1-M4YUrq_s042&_nc_ht=scontent.fdac11-1.fna&oh=00_AfAgsV8yZ_jY60OFD93x8Nr_2ZX6goBkvsHfmNN-Hd8WYA&oe=63F2D440",
      message:
        "Different types of testimonials will vary in length. Good content marketing professionals will use a selection of quotes, videos, blogs, and case study testimonials to build up a story of success.",
      name: "Mukta apu",
    },
    {
      id: 2,
      profile:
        "https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/318098758_884662266302734_8004935097768564361_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGkesevj0MQJDsmKZp84lUpw0m7C-TRPojDSbsL5NE-iDGwx-iukmdjLRl7ZW9xiS27MgKcdwjh-O6vzIJsd7VA&_nc_ohc=pVpuS27tgFAAX91syoW&_nc_oc=AQmfYmEvB7WO9spHL-CaXVkEzq3CeE9NY-oRiBEDcObQT9jcw0iBMw2myfkoSX-ah5k&_nc_ht=scontent.fdac11-1.fna&oh=00_AfCzavl2j1Zyj91XW5dxnKuyaJb2aiMOfEo-lt_57-rbiw&oe=63D09805",
      message:
        "Different types of testimonials will vary in length. Good content marketing professionals will use a selection of quotes, videos, blogs, and case study testimonials to build up a story of success.",
      name: "Fatema apu",
    },
    {
      id: 3,
      profile:
        "https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/240972713_2898430330487371_1139205994692314943_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEISvAiMUmDhOLO_ZTYqdmo3hDpPS20edreEOk9LbR52h2YarCHAlTKsUC0EzakkhGr-bXf2tUfxd61RI8OKWgw&_nc_ohc=nOdtlQUnb5oAX-ddzn7&_nc_ht=scontent.fdac11-1.fna&oh=00_AfAsZ58gVPiJg5aKCtsdUkBEmTwBd2wcbKAdkQNoiGdWlQ&oe=63D0FD33",
      message:
        "Different types of testimonials will vary in length. Good content marketing professionals will use a selection of quotes, videos, blogs, and case study testimonials to build up a story of success.",
      name: "Masud Rana",
    },
  ];
  return (
    <div className="lg:max-w-[1350px] mx-auto">
      <div>
        <h4 className="text-xl font-light text-center">Our Testimonial</h4>
        <h2 className="text-5xl font-bold text-center">
          What's Our Customar say
        </h2>
      </div>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        //   navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div>
            {testimonalData.map((testimonal) => (
              <SwiperSlide className="my-10">
                <div key={testimonal.id} className="">
                  <div className="group border-2 border-animated-spin border-dashed border-gray-500 w-20 h-20 overflow-hidden mx-auto rounded-full">
                    <img
                      className="group-hover:scale-75 duration-500 bg-origin-content w-full h-full rounded-full"
                      src={testimonal.profile}
                      alt={testimonal.name}
                    />
                  </div>
                  <h4 className="my-3 text-center font-semibold text-2xl">{testimonal.name}</h4>

                  <div>
                    <blockquote><q>{testimonal.message}</q></blockquote>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonal;
