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

      <div className="text-[#F8F7F5] flex lg:space-x-12 space-x-4 mt-5  uppercase">
        <div className="flex flex-col gap-2 items-center text-center w-max">
          <img
            className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
            src="./images/divt1.svg "
            alt="error"
          />
          <p className=" lg:text-base text-[4px] ">Fendi</p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max">
          <img
            className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
            src="./images/divt2.svg "
            alt="error"
          />
          <p className=" lg:text-base text-[4px] ">Mesh.Ai</p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max">
          <img
            className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
            src="./images/divt3.svg "
            alt="error"
          />
          <p className="  lg:textbasee text-[4px] w-8 lg:w-20">
            luffy token exchange
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max">
          <img
            className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
            src="./images/divt4.svg "
            alt="error"
          />
          <p className=" lg:text-base text-[4px]  ">Fendi</p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max">
          <img
            className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
            src="./images/divt5.svg "
            alt="error"
          />
          <p className=" lg:text-base text-[4px] ">Mesh.Ai</p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max">
          <img
            className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
            src="./images/divt6.svg "
            alt="error"
          />
          <p className=" lg:text-base text-[4px]  w-8 lg:w-20 ">
            luffy token exchange
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max">
          <img
            className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
            src="./images/divt7.svg "
            alt="error"
          />
          <p className=" lg:text-base text-[4px] ">Mesh.Ai</p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center w-max">
          <img
            className="xl:w-32 lg:w-20 w-8 justify-center uppercase"
            src="./images/divt8.svg "
            alt="error"
          />
          <p className=" lg:text-base text-[4px]  lg:w-20 w-8">
            luffy token exchange
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
