import React from "react";
import HeadLines from "../headlines/HeadLines";
import ButtonProps from "../buttonprops/ButtonProps";
import { MdOutlineCropSquare } from "react-icons/md";

const Hero = () => {
  const Box = () => {
    return (
      <>
        <div className=" p-4 mx-3 rounded-full transition duration-700 bg-white text-[#5142FC] hover:text-white hover:bg-[#5142FC]">
          <MdOutlineCropSquare size="24" />
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" flex flex-col min-w-full">
        <div className=" flex fixed bottom-4 right-4 z-[9999] justify-end items-center">
          <Box />
        </div>
        <div className="px-4 py-28 lg:py-40 flex h-full flex-col bg-black items-center justify-center">
          <div>
            <HeadLines />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2">
            <div className=" flex items-center gap-2">
              <ButtonProps title="Staking" />
              <ButtonProps title="Migrate V2" />
            </div>
            <div className=" flex items-center gap-2">
              <ButtonProps title="connect Wallet" />
              <ButtonProps title="Airdrop" />
            </div>
            <div className=" flex items-center gap-2">
              <ButtonProps title="Whitelist" />
              <ButtonProps title="KYC" />
            </div>
            <div className=" flex items-center gap-2">
              <ButtonProps title="RPC Settings" />
              <ButtonProps title="Buy NFT" />
            </div>

            <div className=" flex flex-col items-center gap-2">
              <ButtonProps title="Marketplace" />
              <ButtonProps title="Gas" />
            </div>

            <div className=" flex items-center gap-2">
              <ButtonProps title="Claim rewards" />
              <ButtonProps title="Rectification" />
            </div>
            <div className=" flex items-center gap-2">
              <ButtonProps title="Snapshot" />
              <ButtonProps title="Buy Presale" />
            </div>

            <div className=" flex flex-col justify-center items-center gap-2">
              <ButtonProps title="Migrate" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
