import React from "react";
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";

const AIComunity = () => {
  return (
    <div className="bg-main-gray flex flex-col py-10 font-Lato items-center gap-10 lg:px-10">
      <h1 className=" ">
        <span
          className="bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 text-transparent bg-clip-text
                bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 lg:text-[54px] text-[26px] font-black "
          style={{
            backgroundImage:
              "linear-gradient(to right,#8F41B4, #7D98A6, #50C355)",
          }}
        >
          Manga AI Community
        </span>
      </h1>
      <p className="  m-auto text-[#F8F7F5] lg:w-[46%] w-[75%] text-center mt-3 mb-5 lg:text-base text-[11px] lg:text-[23px] font-normal leading-[14px]">
        Here are beautiful anime images and captivating animated artworks, all
        created by our skilled community using our AI technology.
      </p>
      <div className="">
        <img className="" src="./images/divu1.svg" alt="error" />
      </div>

      <button className="rounded-[13px] text-[#F8F7F5] bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 py-1 lg:py-4 flex text-[13px] font-bold leading-[34px] tracking-tight w-max gap-10 items-center px-10 lg:text-[26px]">
        <p>Create Your Anime Art Now</p> <FaArrowRight />
      </button>
    </div>
  );
};

export default AIComunity;
