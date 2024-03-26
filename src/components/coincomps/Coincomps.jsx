import {React, useEffect } from 'react';
import '../../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Coincomps = ({ data }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

  return (
    <>
      <div className='mx-[3vw]'>
        <h1 className="text-[30px] font-[600] text-center my-[35px]">
          Select a Wallet
        </h1>
        <div className="" data-aos="fade-up" data-aos-duration='2000'>
          <div className="grid md:grid-cols-4 gap-y-[35px] grid-cols-2">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex gap-[20px] items-center px-[20px] py-[20px] w-[80%] rounded shadow-2xl"
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div className="flex flex-col gap-[5px]" data-aos="fade-right" data-aos-duration='2000'>
                  <p className="text-[20px] font-[600]">{item.name} </p>
                  <p className="text-[15px] text-gray-500 font-[500]">
                    {item.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coincomps;
