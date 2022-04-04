import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const icons = [
    {
      icon: <FaFacebookF />,
      link: "/",
    },
    {
      icon: <FaLinkedinIn />,
      link: "/",
    },
    {
      icon: <FaInstagram />,
      link: "/",
    },
  ];
  return (
    <footer className="w-full px-20 flex flex-row justify-between fixed bottom-[35px]">
      <div className="flex flex-col justify-center items-center pl-6">
        {icons.map((icon, index) => (
          <a
            className="pb-4 text-[#919395] text-xl"
            href={icon.link}
          >
            {icon.icon}
          </a>
        ))}
      </div>
      <a
        href="#"
        className="uppercase text-[#919395] [writing-mode:vertical-lr] font-cerareg tracking-widest after:content[''] after:absolute after:w-[1px] after:bg-[#919395] after:h-[20px] after:bottom-0 after:right-[91px]"
      >
        scroll
      </a>
    </footer>
  );
};

export default Footer;
