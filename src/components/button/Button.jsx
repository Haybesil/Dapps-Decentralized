import React from "react";
import { FaWallet } from "react-icons/fa6";

const Button = (props) => {
  return (
    <>
      <div className=" p-3 lg:py-3 lg:px-8  border-2 hover:bg-white transition duration-700 border-white rounded-full lg:rounded-[25px] flex items-center gap-3 cursor-pointer hover:text-[#5142FC]">
        <div>
          <FaWallet size="20" />
        </div>
        <div className="hidden lg:block">{props.title}</div>
      </div>
    </>
  );
};

export default Button;
