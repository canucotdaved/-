import React, {
  useState,
  useRef,
} from "react";
import Button from "../components/Button";
import { BsArrowRight } from "react-icons/bs";
import { Info } from "../data";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSent, setIsSent] =
    useState(false);
  const form = useRef<
    String | HTMLFormElement | undefined
  >(null);

  const handleContactForm = (
    e: any
  ) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2rijppm",
        "template_a1n5fvp",
        e.target,
        "v-BXErzGgkFCSLlgh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(!isSent);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 flex flex-col md:flex-row h-full md:h-[100vh] items-center justify-center mb-16 md:mb-0">
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-5xl md:text-6xl text-center text-white font-cerabold uppercase mb-10">
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
      <div className="w-full md:w-1/2 mt-16">
        <form
          action=""
          className="w-full shadow-3xl drop-shadow-2xl p-8 md:p-16"
          //@ts-ignore
          ref={form}
          onSubmit={handleContactForm}
        >
          <h3 className="font-cerabold text-5xl md:text-6xl text-white uppercase mb-10 text-center">
            Contact Form
          </h3>
          {isSent ? (
            <h2 className="font-cerabold text-3xl md:text-4xl text-white uppercase mb-10 text-center">
              Thank you for Contacting
              me, I'll get back to you
              soon
            </h2>
          ) : (
            <div>
              <div className="border-b border-txtcolor mb-10">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Fullname"
                  className="bg-transparent font-cerareg text-base text-txtcolor w-full placeholder:font-cerareg pb-4 appearance-none  focus:outline-none"
                />
              </div>
              <div className="border-b border-txtcolor mb-10">
                <input
                  type="email"
                  name="to_email"
                  placeholder="Email"
                  className="bg-transparent font-cerareg text-base text-txtcolor w-full placeholder:font-cerareg pb-4 appearance-none  focus:outline-none"
                />
              </div>
              <div className="border-b border-txtcolor mb-10">
                <input
                  type="phone"
                  name="from_phone"
                  placeholder="Phone"
                  autoComplete="false"
                  className="bg-transparent font-cerareg text-base text-txtcolor w-full placeholder:font-cerareg pb-4 appearance-none  focus:outline-none"
                />
              </div>
              <div className="border-b border-txtcolor mb-8">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="bg-transparent font-cerareg text-base text-txtcolor w-full placeholder:font-cerareg pb-4 appearance-none  focus:outline-none"
                ></textarea>
              </div>
              <div className="">
                <button
                  className="flex flex-row items-center text-txtcolor font-cerareg text-base py-4 uppercase shadow-3xl text-center bg-[#181B1E] border-[#919395] border-0 mx-auto drop-shadow-xl mt-6 px-12"
                  type="submit"
                >
                  SEND MESSAGE
                  <BsArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
