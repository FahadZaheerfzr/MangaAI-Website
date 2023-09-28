import React from "react";

const sections = [
  {
    title: "Set up Your Wallet",
    description:
      "Set up a MetaMask Wallet on your desktop computer or iOS/Android mobile device. This will enable you to easily buy, sell, send, and receive $Manga tokens.",
  },
  {
    title: "Send BNB to your Wallet",
    description:
      "Purchase BNB directly within MetaMask or transfer it from exchanges like Coinbase, Binance, and more to your MetaMask Wallet.",
  },

];
const sections2 = [
  {
    title: "Swap BNB for $Manga",
    description:
      "Once you have BNB in your wallet, you can immediately begin swapping. Click on 'Select a token' and either input the token address or locate it in the tokens list.",
  },
  {
    title: "Send BNB to your Wallet",
    description:
      "Purchase BNB directly within MetaMask or transfer it from exchanges like Coinbase, Binance, and more to your MetaMask Wallet.",
  },
];

const StartGuide = () => {
  return (
    <div className="bg-main-purple lg:p-12  p-4 font-Lato flex flex-col items-center gap-4 lg:gap-10 relative">
      <h1 className="lg:text-[54px] text-[26px] font-black mr-auto">
        <span
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor' 
                  bg-gray-800 rounded-lg  justify-center relative z-10 font-custom9 "
          style={{
            backgroundImage:
              "linear-gradient(to right,#8F41B4, #7D98A6, #50C355)",
          }}
        >
          Quick Start Guide
        </span>
      </h1>
      <div className="flex lg:flex-row flex-col gap-5 lg:gap-44">
        <div className="flex flex-col gap-10  w-1/2">
          <a
            className="text-[#F8F7F5] text-[13px] lg:text-[26px] underline border-l border-[#8F41B4]  px-4 py-1 "
            href="/"
          >
            Buy Now
          </a>
          <img
            className="hidden lg:block absolute bottom-0  left-0 w-[400px] z-0"
            src="./images/divv1.svg"
            alt="error"
          />
        </div>

        <div className="flex gap-4 lg:gap-10 z-10">
          <div className="  flex flex-col gap-5 lg:gap-20 ">
            {sections.map((section, index) => (
              <div className="flex  flex-col gap-4 lg:gap-8  " key={index}>
                  <h1 className="text-[#88C48A] font-custom8  justify-center lg:text-[23px] xl:text-[32px] text-base">
                    {section.title}
                  </h1>
                  <p className="text-[#F8F7F5] lg:leading-loose lg:text-[16px] xl:text-[23px] text-[11px] leading-[14px]">
                    {section.description}
                  </p>
              </div>
            ))}
          </div>
          <div className="  flex flex-col gap-5 lg:gap-20 ">
            {sections2.map((section, index) => (
              <div className="flex  flex-col gap-4 lg:gap-8  " key={index}>
                  <h1 className="text-[#88C48A] font-custom8  justify-center lg:text-[23px] xl:text-[32px] text-base">
                    {section.title}
                  </h1>
                  <p className="text-[#F8F7F5] lg:leading-loose lg:text-[16px] xl:text-[23px] text-[11px] leading-[14px]">
                    {section.description}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGuide;
