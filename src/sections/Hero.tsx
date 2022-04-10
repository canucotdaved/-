import React from "react";

const Hero = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center w-full md:w-[551px] mx-auto">
      <span className="font-cerareg text-[#919395] tracking-widest text-center md:text-left mr:0 md:mr-[9rem]">
        I AM
      </span>
      <h2 className="font-cerabold text-9xl md:text-[15rem] text-center tracking-[-0.1em] text-[#DDDCDC] leading-[0.95em] drop-shadow-2xl">
        DAVE
      </h2>
      <span className="font-cerareg text-[#919395] text-center md:text-left ml:0 md:ml-[12rem] tracking-widest pt-4">
        A FRONT-END{" "}
        <br className="hidden  md:block" />{" "}
        DEVELOPER
      </span>
    </div>
  );
};

export default Hero;
