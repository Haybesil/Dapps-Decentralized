import React from "react";
import { FaWallet } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import { TbBadgeFilled } from "react-icons/tb";

const HomeCard = () => {
  const Card = (props) => {
    return (
      <>
        <div className=" flex flex-col items-center text-center gap-5">
          <div className=" font-semibold text-2xl text-[#1F1F2C]">
            {props.title}
          </div>

          <div className=" text-sm text-[#9C9BA8]">{props.description}</div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" flex flex-col lg:flex-row  gap-5 p-16 bg-[#F8F8F8]">
        <div className="  flex flex-col items-center gap-5">
          <div className=" p-4 rounded-xl bg-[#5142FC]">
            <FaWallet size="30" color="white" />
          </div>
          <Card
            title="Select Your Wallet"
            description="We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding."
          />
        </div>

        <div className="  flex flex-col items-center gap-5">
          <div className=" p-4 rounded-xl bg-[#48A432]">
            <AiFillAppstore size="30" color="white" />
          </div>
          <Card
            title="Validate Your Wallet"
            description="We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding."
          />
        </div>

        <div className="  flex flex-col items-center gap-5">
          <div className=" p-4 rounded-xl bg-[#9835FB]">
            <BsFillImageFill size="30" color="white" />
          </div>
          <Card
            title="Generate QR Code"
            description="We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding."
          />
        </div>

        <div className="  flex flex-col items-center gap-5">
          <div className=" p-4 rounded-xl bg-[#DF4949]">
            <TbBadgeFilled size="30" color="white" />
          </div>
          <Card
            title="Save Wallet QR Code"
            description="We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding."
          />
        </div>

        {/* <div>
          <div>
            <FaWallet size="20" />
          </div>
          <Card
            title="Select Your Wallet"
            description="We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding."
          />
        </div>

        <div>
          <div>
            <FaWallet size="20" />
          </div>
          <Card
            title="Select Your Wallet"
            description="We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding."
          />
        </div>

        <div>
          <div>
            <FaWallet size="20" />
          </div>
          <Card
            title="Select Your Wallet"
            description="We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding."
          />
        </div>

        <div>
          <div>
            <FaWallet size="20" />
          </div>
          <Card
           
            title="Select Your Wallet"
            description="We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding."
          />
        </div> */}
      </div>
    </>
  );
};

export default HomeCard;
