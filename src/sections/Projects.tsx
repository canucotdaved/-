import React, { useState } from "react";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Button from "../components/Button";
import { Images, Text } from "../data/";

const Projects = () => {
  const [index, setIndex] = useState(2);

  return (
    <div className="h-full md:h-[100vh] flex justify-center items-center relative flex-col my-9 md:my-0">
      <Swiper
        modules={[EffectCoverflow]}
        effect={"coverflow"}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: "auto",
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        onSlideChange={(swiper) => {
          if (swiper.touches.diff < 0) {
            if (index < Text.length)
              setIndex(index + 1);
          } else {
            if (index > 0)
              setIndex(index - 1);
          }
        }}
        onSwiper={(swiper) =>
          console.log(swiper)
        }
        className="justify-center items-center max-w-[1440px] w-full"
      >
        {Images.map((imgs, idx) => (
          <SwiperSlide>
            <img
              src={imgs.image}
              alt={imgs.alt}
              className="img-slider"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col  justify-center static md:absolute md:z-10 bottom-0 md:bottom-[2rem] font-cerabold text-white tracking-wide ">
        <h2 className="uppercase text-center pb-7 text-6xl md:text-8xl">
          {Text[index].Title}
        </h2>
        <p className="font-cerareg text-txtcolor text-base text-center max-w-[1024px]">
          {Text[index].description}
        </p>
        <Button
          link={Text[index].link}
          classname="md:w-1/3 w-full"
        >
          View Project
        </Button>
      </div>
    </div>
  );
};

export default Projects;
