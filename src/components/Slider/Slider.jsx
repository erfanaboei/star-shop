import React from "react";
import classes from "./Slider.module.css";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderData from "./SliderData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider() {
  let slider = [];
  SliderData.map((p, index) => {
    slider.push(
      <SwiperSlide key={index}>
        <img src={p.img} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className={classes.Slider}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ dynamicBullets: true }}
          navigation={{ enabled: true }}
        >
          {slider}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
