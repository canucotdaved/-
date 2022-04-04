import React from "react";

interface PropType {
  link: string;
  children: React.ReactNode;
}
const Button: React.FC<PropType> = ({
  link,
  children,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="text-[#919395] font-cerareg text-base p-5 uppercase shadow-xl text-center bg-[#181B1E] border-[#919395] border-0 w-1/3 mx-auto drop-shadow-xl mt-6"
    >
      {children}
    </a>
  );
};

export default Button;
