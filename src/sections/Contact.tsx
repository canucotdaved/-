import React from "react";
import Button from "../components/Button";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const Info = [
    {
      label: "Address",
      value: "Cebu, Philippines",
    },
    {
      label: "Phone",
      value: "(+63) 951-129-9722",
    },
    {
      label: "E-mail",
      value: "canucotdaved@gmail.com",
    },
  ];

  const input = [
    {
      name: "Fullname",
      type: "text",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Phone",
      type: "number",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-5 flex flex-col md:flex-row h-[100vh] items-center justify-center">
      <div className="w-1/2 flex flex-col">
        <h2 className="text-6xl text-center text-white font-cerabold uppercase mb-10">
          Contact
        </h2>
        <p className="font-cerareg text-base text-txtcolor text-center mb-10 px-10">
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Ipsa eum optio molestiae quis
          soluta inventore praesentium
          blanditiis illum nisi et?
          Impedit vel quam eaque tempora
          at voluptatem? Provident,
          consectetur in.
        </p>
        {Info.map((inf, ind) => (
          <>
            <h4 className="font-cerabold text-white text-2xl pb-1 text-center">
              {inf.label}
            </h4>
            <p className="font-cerareg text-txtcolor text-base mb-5 text-center">
              {inf.value}
            </p>
          </>
        ))}
      </div>
      <div className="w-1/2 mt-16">
        <form
          action=""
          className="w-full shadow-3xl drop-shadow-2xl p-16"
        >
          <h3 className="font-cerabold text-6xl text-white uppercase mb-10 text-center">
            Contact Form
          </h3>
          {input.map((inpt, idx) => (
            <div
              className="border-b border-txtcolor mb-10"
              key={idx}
            >
              <input
                type={inpt.type}
                name={inpt.name}
                placeholder={inpt.name}
                className="bg-transparent font-cerareg text-base text-txtcolor w-full placeholder:font-cerareg pb-4 appearance-none  focus:outline-none"
              />
            </div>
          ))}
          <div className="border-b border-txtcolor mb-8">
            <textarea
              placeholder="Message"
              className="bg-transparent font-cerareg text-base text-txtcolor w-full placeholder:font-cerareg pb-4 appearance-none  focus:outline-none"
            ></textarea>
          </div>
          <div className="flex">
            <Button
              link="/"
              classname="w-1/2 flex items-center justify-center"
            >
              Send Message
              <BsArrowRight className="ml-3" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
