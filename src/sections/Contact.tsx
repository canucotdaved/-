import React from "react";

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
      <div className="w-1/2 "></div>
    </div>
  );
};

export default Contact;
