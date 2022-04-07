import React from "react";

interface PropType {
  link: string;
  children: React.ReactNode;
  classname?: string;
}
const Button: React.FC<PropType> = ({
  link,
  children,
  classname,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`text-[#919395] font-cerareg text-base p-5 uppercase shadow-3xl text-center bg-[#181B1E] ${classname} border-[#919395] border-0 mx-auto drop-shadow-xl mt-6`}
    >
      {children}
    </a>
  );
};

export default Button;
