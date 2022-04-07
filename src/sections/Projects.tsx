import React, { useState } from "react";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Button from "../components/Button";

const Projects = () => {
  const Images = [
    {
      id: 1,
      images:
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      alt: "alt image",
    },
    {
      id: 2,
      images:
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      alt: "alt image",
    },
    {
      id: 3,
      images:
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      alt: "alt image",
    },
  ];
  const Text = [
    {
      id: Images[0],
      title: "Sunset",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe maiores aperiam ipsum error omnis? Ipsam nihil reprehenderit enim molestias, non architecto tempora inventore odio, quo nesciunt esse vero voluptatem.",
      link: "/",
    },
    {
      id: Images[1],
      title: "Sunrise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe maiores aperiam ipsum error omnis? Ipsam nihil reprehenderit enim molestias, non architecto tempora inventore odio, quo nesciunt esse vero voluptatem.",
      link: "/",
    },
    {
      id: Images[2],
      title: "Moon Light",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe maiores aperiam ipsum error omnis? Ipsam nihil reprehenderit enim molestias, non architecto tempora inventore odio, quo nesciunt esse vero voluptatem.",
      link: "/",
    },
  ];

  const [index, setIndex] = useState(2);

  return (
    <div className="h-[100vh] flex justify-center items-center relative">
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
        className="justify-center items-center max-w-[1440px]"
      >
        {Images.map((imgs, idx) => (
          <SwiperSlide>
            <img
              src={imgs.images}
              alt={imgs.alt}
              className="img-slider"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-row md:flex-col  justify-center absolute text-8xl z-10 bottom-10 font-cerabold text-white tracking-wide ">
        <h2 className="uppercase text-center pb-7">
          {Text[index].title}
        </h2>
        <p className="font-cerareg text-txtcolor text-base text-center max-w-[1024px]">
          {Text[index].description}
        </p>
        <Button
          link={Text[index].link}
          classname="w-1/3"
        >
          View Project
        </Button>
      </div>
    </div>
  );
};

export default Projects;
