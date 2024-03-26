import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className=" py-20 px-5 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        <div className=" flex flex-col gap-5">
          <div className=" text-4xl w-[300px] text-[#5142FC] font-semibold">
            Decentralized Launchpad
          </div>
          <div className=" text-md w-[350px] font-light">
            Open and decentralized protocol for syncing various Wallets to Dapps
            Secure Server. This is not an app but a protocol that establishes a
            remote connection between two apps and/or devices
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className=" text-md font-semibold">Subscribe</div>

          <div className=" flex relative ">
            <input
              type="email"
              placeholder="name@email.com"
              className=" outline-none min-w-[300px] h-[55px] border border-gray-400 rounded-lg p-5 focus:border-[#5142FC]"
            />
            <button className=" bg-[#5142FC] rounded-r-md absolute right-0 p-3 ">
              <RiSendPlane2Fill size="30" color="white"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
