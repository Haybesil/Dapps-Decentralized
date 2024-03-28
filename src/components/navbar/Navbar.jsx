import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Button from '../buttonprops/ButtonProps';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className=" sticky flex pl-3 pr-12 lg:pr-40 items-center lg:justify-between gap-[40px] bg-black h-20 text-white border-b px-[4vw]">
        <Link to='/' className=" text-lg font-semibold">Decentralized LaunchPad</Link>

        <div className=" flex items-center gap-5">
          <div>
            <FiSearch size="26" />
          </div>

          <div>
            <Link to="/wallet">
              <Button title="Validate Wallet" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
