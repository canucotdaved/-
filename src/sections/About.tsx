import React from "react";
import MySelf from "../assets/MySelf.jpg";
import { Study } from "../data";
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
        <h2 className="font-cerabold text-white text-6xl md:text-8xl uppercase mb-5 text-center md:text-left">
          About Me
        </h2>
        <p className="font-cerareg text-base text-txtcolor pr-0 md:pr-20 text-center md:text-left">
          Hello! My name is Dave and I
          enjoy creating things that
          live on the internet. My
          interest in web development
          started back in 2016 when I
          decided to try building simple
          CRUD Blog and taught me a lot
          about HTML & CSS
          <br />
          <br />
          Fast-forward to today, and
          I’ve had the privilege of
          working at an Software
          Development Company, a huge
          corporation. My main focus
          these days is building
          accessible, inclusive products
          and gaining experience at DNA
          Micro Software for a variety
          of clients.
          <br />
          <br />
          I also recently launched a
          project that will check
          weather forecast built for web
          and Smart Phone.
          <br />
          <br />
          Here are a few technologies
          I’ve been working with
          recently:
        </p>
        <br />
        <ul className="font-cerareg text-base text-txtcolor pr-0 md:pr-20 text-center md:text-left columns-2">
          {Study.map((indx) => (
            <li className="list-disc list-inside">
              {indx.tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
