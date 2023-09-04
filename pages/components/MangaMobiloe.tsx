import React from "react";

const MangaMobiloe = () => {
  return (
    <>
      <div className="bg-main-purple lg:pb-72 pb-5 p-2 md:hidden font-Lato">
        <h1 className=" w-fit m-auto pt-10 pb-4">
          <span
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
          <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, #8B008B, #8B5CF6, #00FF00)",
            }}
          >
            MANGA
          </span>
        </h1>

        <div className="flex w-full gap-x-2">
          <div className="flex flex-col gap-y-2 ">
            <div className="bg-main-gray-lighter rounded-lg p-2">
              <h4 className="text-[#88C48A] font-custom8  text-sm text-center">
                Staking
              </h4>
              <p className="text-[#F8F7F5] text-justify  lg:text-base text-xs">
                MANGA token holders have the opportunity to actively engage with
                the platform's growth through staking.
              </p>
              <button className="rounded-md text-[#F8F7F5] mb-4 bg-gradient-to-r from-purple-600 to-green-500  p-2 font-medium flex justify-center m-auto lg:mt-4 mt-3 text-sm">
                Stake
              </button>
            </div>

            <div className="bg-main-gray-lighter rounded-lg text-center p-2 pb-5">
              <h4 className="text-[#88C48A] font-custom8 lg:text-2xl text-sm ">
                Governance
              </h4>
              <p className="text-[#F8F7F5] text-justify lg:text-base text-xs ">
                Governance proposals, ranging from feature enhancements to
                ecosystem expansion, are subject to voting by MANGA token
                holders, ensuring a decentralized and community-driven approach
                to platform evolution.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="bg-main-gray-lighter rounded-lg  p-2 ">
              <h4 className="text-[#88C48A] font-custom8 lg:text-2xl text-sm">
                $MANGA Burn
              </h4>
              <p className="text-[#F8F7F5] text-justify lg:text-base text-xs">
                The tokens utilized for NFT minting will be systematically
                burned during our monthly Burn Event
              </p>
            </div>
            <div className="bg-main-gray-lighter rounded-lg p-2">
              <h4 className="text-[#88C48A] font-custom8   lg:text-2xl text-sm">
                Minting NFTs
              </h4>
              <p className="text-[#F8F7F5] text-justify lg:text-base text-xs">
                Use Manga Tokens to mint exclusive Manga NFTs, securing your
                ownership of anime art on the blockchain.
              </p>
              <div className="border-1 h-6 border-purple-500 rounded-full inline-block float-left"></div>
              <a className="text-[#F8F7F5] text-xs lg:text-base ml-2" href="/">Mint Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MangaMobiloe;
