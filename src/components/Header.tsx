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
    <header className="fixed px-5 md:px-20 py-10 flex flex-col md:flex-row justify-between w-full">
      <h1 className="font-cerabold text-[#DDDCDC] text-5xl flex flex-col leading-[0.7]">
        <span>DA</span>
        <span>VE</span>
      </h1>
      <ul className="md:flex md:flex-row md:items-center z-1 md:z-auto md:static absolute left-0 md:py-0 py-4 md:pl-0 pl-7 top-[7rem] md:top-0 md:opacity-100 opacity-0">
        {links.map((link, index) => (
          <li
            key={index}
            className="mr-0 md:mr-20 mx-4 my-6 md:my-0"
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
