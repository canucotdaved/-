import React from "react";

const Header = () => {
  const links = [
    {
      name: "ABOUT",
      link: "/",
    },
    {
      name: "PROJECTS",
      link: "/",
    },
    {
      name: "CONTACT",
      link: "/",
    },
  ];
  return (
    <header className="fixed px-20 py-10 flex flex-col md:flex-row justify-between w-full">
      <h1 className="font-cerabold text-[#DDDCDC] text-5xl flex flex-col leading-[0.7]">
        <span>DA</span>
        <span>VE</span>
      </h1>
      <ul className="flex flex-row items-center">
        {links.map((link, index) => (
          <li
            key={index}
            className="mr-20"
          >
            <a
              href={link.link}
              className="font-cerareg text-[#DDDCDC] tracking-widest"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
