import React from "react";

const Manga = () => {
  return (
    <>
      <div
        className="bg-main-purple pb-24 p-7 hidden lg:block font-Lato"
        id="grand-parent"
      >
        <h1 className=" w-fit m-auto pt-10 pb-5">
          <span
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
          <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9"
            style={{
              backgroundImage:
                "linear-gradient(to right, #8F41B4, #7D98A6, #50C355)",
            }}
          >
            $MANGA
          </span>
        </h1>

        <div className="flex px-10 w-full">
          <div
            className="bg-main-gray-lighter rounded-lg p-8 float-left" id="child">
            <h4 className="text-[#88C48A] font-custom8 text-center pt-3  ">
              Staking
            </h4>
            <p className="text-[#F8F7F5] pb-4 lg:text-base text-xs w-48">MANGA token holders have the opportunity to actively engage with the platform's growth through staking.
            </p>
            <button className="rounded-md text-[#F8F7F5] mb-4 bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 p-2 font-medium flex justify-center m-auto lg:mt-4 mt-3 w-44">
              Stake
            </button>
          </div>

          <div className="flex flex-col ml-2 ">
            <div
              className="bg-main-gray-lighter rounded-lg p-4 w-full"
              id="child"
            >
              <h4 className="text-[#88C48A]  font-custom8 text-center">Governance</h4>
              <p className="text-[#F8F7F5] pt-2 lg:text-base text-xs text-justify mb-10 mt-2">
                Governance proposals, ranging from feature enhancements to
                ecosystem expansion, are subject to voting by MANGA token
                holders, ensuring a decentralized and community-driven approach
                to platform evolution. 
            
              </p>
            </div>
            <div className="flex">
              <div
                className="bg-main-gray-lighter rounded-lg p-4 pr-4 pl-4  mt-2 w-1/2 float-left"
                id="child"
              >
                <h4 className="text-[#88C48A] font-custom8 text-center ">$MANGA Burn</h4>
                <p className="text-[#F8F7F5]  pt-2 text-justify pb-10">
                  The tokens utilized for NFT minting will be systematically
                  burned during our monthly Burn Event
                </p>
              </div>

              <div
                className="bg-main-gray-lighter rounded-lg p-4 pr-4 pl-4 pb-2 ml-2 mt-2 w-1/2 float-left"
                id="child"
              >
                <h4 className="text-[#88C48A]  font-custom8 text-center ">Minting NFTs</h4>
                <p className="text-[#F8F7F5] pt-2 text-justify">
                  Use Manga Tokens to mint exclusive Manga NFTs, securing your
                  ownership of anime art on the blockchain.
                </p>
                <div className="mt-2 flex justify-center ">
                  <div className="border-1 h-7 rounded-full inline-block mb-2 mr-2 border-l border-fuchsia-700   float-left  "></div>
                  <a className="text-[#F8F7F5]  h-26 underline " href="/">
                    Mint Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manga;
