import React from "react";

const Hero = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center w-[551px] mx-auto">
      <span className="font-cerareg text-[#919395] tracking-widest mr-[9rem]">
        I AM
      </span>
      <h2 className="font-cerabold text-[15rem] text-center tracking-[-0.1em] text-[#DDDCDC] leading-[0.95em] drop-shadow-2xl">
        DAVE
      </h2>
      <span className="font-cerareg text-[#919395] ml-[12rem] tracking-widest pt-4">
        A FRONT-END <br /> DEVELOPER
      </span>
    </div>
  );
};

export default Hero;
