import React from "react";

const TelegramBot = () => {
  return (
    <div className="bg-main-purple pb-44 lg:pb-56 font-Lato relative flex flex-col items-center gap-10">
      <img className="absolute pt-11" src="./images/divs1.svg " alt="error" />
      <p className=" w-fit m-auto pt-24 text-center font-bold lg:text-5xl  text-2xl">
        <span
          className="bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 text-transparent bg-clip-text uppercase
                bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 lg:text-[54px] text-[26px] font-black "
          style={{
            backgroundImage:
              "linear-gradient(to right,#8F41B4, #7D98A6, #50C355)",
          }}
        >
          Manga AI telegram bot
        </span>
      </p>
      <p className="text-[#F8F7F5] text-[19px] lg:text-[33px] font-bold uppercase tracking-[13.28px] ">
        IS LIVE NOW
      </p>
      <p className="text-[#F8F7F5] text-center text-[11px] lg:text-[23px] font-medium leading-loose tracking-wide">
        Make fantastic anime artwork in just seconds with Manga AI's Ai Bot
      </p>

      <div className="flex justify-center gap-x-5 lg:gap-20 items-center w-full">
        <div className=" ">
          <div>
            <img
              className="w-full max-w-full hidden lg:block"
              src="./images/divs2.svg"
              alt="error"
            />
            <img className="lg:hidden w-full" src="/images/mobile-telegram.svg" />
          </div>
        </div>

        <div className="bg-[#473059] rounded-xl lg:rounded-[52px] py-2 lg:py-7 sm:px-10 px-2 md:px-20 lg:px-44  w-max justify-center gap-16 lg:gap-32 flex ">
          <div className="text-[#F8F7F5] flex flex-col gap-1 text-center ">
            <h3 className="font-black text-[32px] lg:text-[50px]">100</h3>
            <p className="text-[#C28BEC] text-[6px] lg:text-xs font-medium leading-loose tracking-tight">Total Users</p>
          </div>
          <div className="text-[#F8F7F5] flex flex-col gap-1 text-center">
            <h3 className="font-black text-[32px] lg:text-[50px]">5583</h3>
            <p className="text-[#C28BEC] text-[6px] lg:text-xs font-medium leading-loose tracking-tight">Total images generated</p>
          </div>
        </div>

        <div className="items-center">
          <div>
            <img
              className="w-full max-w-full hidden lg:block"
              src="./images/divs3.svg"
              alt="error"
            />
            <img className="lg:hidden w-full" src="/images/mobile-telegram-1.svg" />

          </div>
        </div>
      </div>

      <img
        className=" left-1/2 -translate-x-1/2 w-full max-w-md md:max-w-2xl lg:max-w-6xl -bottom-1/2 absolute  z-20"
        src="./images/sharp mock up.png"
        alt="error"
      />
    </div>
  );
};

export default TelegramBot;
