import React from "react";
import { Link } from 'react-router-dom'
import { GiNotebook } from "react-icons/gi";

const ButtonProps = (props) => {
  return (
    <>
      <Link to='/wallet' className=" py-3 px-8  border-2 text-white hover:bg-white transition duration-700 border-white rounded-full lg:rounded-[25px]  flex items-center gap-3 cursor-pointer hover:text-[#5142FC]">
        <div>
          <GiNotebook size="20" />
        </div>
        <div className=" text-md">{props.title}</div>
      </Link>
    </>
  );
};

export default ButtonProps;
