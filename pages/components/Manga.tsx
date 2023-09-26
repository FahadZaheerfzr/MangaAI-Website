import React from "react";
import { useState } from 'react'
import { useModal } from "react-simple-modal-provider";
import { useEthers } from "@usedapp/core";
import ABI from "../config/abis/abi.json"
import {contractAddress,BACKEND_URL} from "../config/constants"
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";

const Manga = () => {
  const {account,library} = useEthers();
  const inputText = '0xdA022bf4402F3eDF32B02356056400E8d7eF5522';
  const { open: openModal } = useModal("ConnectionModal");
 
  const mint = async () => {
    if(!account){
      openModal();
      return;
    }
  

    // const Contract
    const contract = new Contract(contractAddress, ABI, library.getSigner());
    try {
      const tx = await contract.Mint(account);
      await tx.wait();
    }
    catch (e) {
      console.log(e);
    }

  }
  return (
    <>
      <div
        className="bg-[#2E2238] pb-24 p-7 hidden lg:block font-Lato" id="grand-parent">
        <div>
          <h1 className=" w-fit lg:text-[54px] m-auto pt-10 pb-5">
            <span
              className="font-custom9 text-transparent bg-clip-text 'containor"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #8F41B4, #7D98A6, #50C355)",
              }}
            >
              $MANGA
            </span>
          </h1>

          <div className="flex px-8 mt-10 w-full">
            <div
              className="bg-main-gray-lighter rounded-lg p-8 float-left" id="child">
              <h4 className="text-[#88C48A] font-custom8 text-center pt-3 text-[36px]  ">
                Staking
              </h4>
              <p className="text-[#F8F7F5] pb-4 lg:text-[23px] leading-[34px] tracking-[0.46px] text-xs w-64 mt-7">MANGA token holders have the opportunity to actively engage with the platform's growth through staking.
              </p>
              <button className="rounded-md text-white mb-4 bg-gradient-to-r from-purple-600 to-green-500 font-medium flex justify-center m-auto lg:mt-4 mt-3 w-[90%] py-1 text-[26px]">
              <a href="https://www.arborswap.org/pools">Stake</a>
              </button>
            </div>

            <div className="flex flex-col ml-2 ">
              <div
                className="bg-main-gray-lighter rounded-lg p-4 w-full"
                id="child"
              >
                <h4 className="text-[#88C48A] font-custom8 text-center pt-3 text-[36px]">Governance</h4>
                <p className="text-[#F8F7F5] pb-1 mt-2 lg:text-[23px] leading-[34px] tracking-[0.46px] text-xs w-full">
                  Governance proposals, ranging from feature enhancements to
                  ecosystem expansion, are subject to voting by MANGA token
                  holders, ensuring a decentralized and community-driven approach
                  to platform evolution.
                </p>
              </div>
              <div className="flex">
                <div
                  className="bg-[#3D3D3D] rounded-lg p-4 pr-4 pl-4  mt-2 w-1/2 float-left"
                  id="child"
                >
                  <h4 className="text-[#88C48A] font-custom8 text-center pt-3 text-[36px]">$MANGA Burn</h4>
                  <p className="text-[#F8F7F5] mt-2 pb-1 lg:text-[23px] leading-[34px] tracking-[0.46px] text-xs w-full">
                    The tokens utilized for NFT minting will be systematically
                    burned during our monthly Burn Event
                  </p>
                </div>

                <div
                  className="bg-main-gray-lighter rounded-lg p-4 pb-10 ml-2 mt-2 w-1/2 float-left"
                  id="child"
                >
                  <h4 className="text-[#88C48A] font-custom8 text-center pt-3 text-[36px] ">Minting NFTs</h4>
                  <p className="text-[#F8F7F5] mt-2 pb-1 lg:text-[23px] leading-[34px] tracking-[0.46px] text-xs w-full">
                    Use Manga Tokens to mint exclusive Manga NFTs, securing your
                    ownership of anime art on the blockchain.
                  </p>
                  <div className="w-fit lg:m-auto ">
                    <div className='flex items-center gap-x-3 mt-3'>
                      <div className="w-[1.5px] h-[27px] bg-[#8F41B4]"></div>
                      <span onClick={mint} className="text-[#F8F7F5] text-[13px] lg:text-[26px] w-fit underline underline-offset-8 cursor-pointer" href="/">
                        Mint Now
                      </span>
                    </div>
                  </div>
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
