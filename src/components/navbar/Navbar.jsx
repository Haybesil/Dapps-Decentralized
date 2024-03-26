import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Button from '../buttonprops/ButtonProps';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className=" sticky flex pl-3 pr-12 lg:pr-40 items-center justify-between bg-black h-20 text-white border-b">
        <div className=" text-lg font-semibold">Decentralized LaunchPad</div>

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
