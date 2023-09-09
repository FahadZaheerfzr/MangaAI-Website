import React from "react";

const Partners = () => {
  return (
    <div className="bg-main-gray-light  font-Lato flex flex-col items-center gap-10 p-10 w-screen">
      <h1 className="lg:text-[54px] text-[26px] font-black ">
        <span
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor' 
                  bg-gray-800 rounded-lg  justify-center relative z-10 font-custom9 "
          style={{
            backgroundImage:
              "linear-gradient(to right,#8F41B4, #7D98A6, #50C355)",
          }}
        >
          Partners and Supporters
        </span>
      </h1>
      <div className="text-[#F8F7F5] flex lg:space-x-12 space-x-4 mt-5  uppercase  ">
        <div className="flex flex-col gap-2 items-center text-center w-max  justify-between ">
          <a href="https://roburna.com/labs">
            <img
              className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
              src="./images/roburna.svg "
              alt="roburna"
            />
          </a>
          {/* <p className=" lg:text-base text-[4px] ">
            <a href="https://roburna.com/labs">Roburna</a>
          </p> */}
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max  justify-between">
          <a href="https://www.arborswap.org/">
            <img
              className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
              src="./images/arborswap.svg"
              alt="Arborswap"
            />
          </a>
          {/* <p className=" lg:text-base text-[4px] ">
            <a href="https://www.arborswap.org/">Arbor Swap</a>
          </p> */}
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max  justify-between">
          <a href="https://www.dextools.io/app">
            {" "}
            <img
              className="xl:w-32 lg:w-20 w-8 mt-10 justify-center uppercase"
              src="./images/dextools.svg "
              alt="Dextools"
            />
          </a>
          {/* <p className="  lg:text-base text-[4px] w-8 lg:w-20">
            <a href="https://www.dextools.io/app">Dextools</a>
          </p> */}
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max  justify-between">
          <a href="https://bscscan.com/">
            {" "}
            <img
              className="xl:w-32 lg:w-20 w-8 mt-10 justify-center uppercase"
              src="./images/bscscan.svg "
              alt="Bscscan"
            />
          </a>
          {/* <p className=" lg:text-base text-[4px]  ">
            <a href="https://bscscan.com/">Bscscan</a>
          </p> */}
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max  justify-between">
          <a href="https://twitter.com/ValhallaMKTN">
            {" "}
            <img
              className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
              src="./images/valhalla.svg "
              alt="Valhalla"
            />
          </a>
          {/* <p className=" lg:text-base text-[4px] ">
            <a href="https://twitter.com/ValhallaMKTN">Valhalla</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Partners;
