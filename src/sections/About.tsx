import React from "react";
import MySelf from "../assets/MySelf.jpg";
const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/2 p-5">
        <img
          src={MySelf}
          alt="image of the author"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col  justify-center p-5">
        <h2 className="font-cerabold text-white text-3xl uppercase mb-5">
          About Me
        </h2>
        <p className="font-cerareg text-base text-txtcolor pr-20">
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Qui quam illo libero
          distinctio nisi quia animi
          blanditiis est dolorem
          accusamus vel dolorum incidunt
          maiores, placeat corrupti,
          maxime perferendis sed.
          Quisquam.
        </p>
      </div>
    </div>
  );
};

export default About;
