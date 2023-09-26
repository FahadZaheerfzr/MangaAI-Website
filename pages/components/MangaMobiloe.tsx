import React from "react";
import { useState } from 'react'
import { useModal } from "react-simple-modal-provider";
import { useEthers } from "@usedapp/core";
import ABI from "../config/abis/abi.json"
import {contractAddress,BACKEND_URL} from "../config/constants"
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";

const MangaMobiloe = () => {
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

        <div className="flex flex-col gap-y-2 w-full gap-x-2">
          <div className="flex gap-x-2 px-3">
            <div className="bg-main-gray-lighter rounded-lg p-2 w-3/5">
              <h4 className="text-[#88C48A] font-custom8  text-base text-center">
                Staking
              </h4>
              <p className="text-[#F8F7F5] mt-1 text-justify  text-[11px]">
                MANGA token holders have the opportunity to actively engage with
                the platform's growth through staking.
              </p>
              <button className="rounded-md text-[#F8F7F5] mb-4 bg-gradient-to-r from-purple-600 to-green-500  w-2/3  font-medium flex justify-center m-auto lg:mt-4 mt-3 text-[13px]">
                Stake
              </button>
            </div>
            <div className="bg-main-gray-lighter rounded-lg  p-2 w-2/5">
              <h4 className="text-[#88C48A] text-center font-custom8 text-base">
                $MANGA Burn
              </h4>
              <p className="text-[#F8F7F5] mt-1 text-justify text-[11px]">
                The tokens utilized for NFT minting will be systematically
                burned during our monthly Burn Event
              </p>
            </div>

          </div>

          <div className="flex gap-x-2 px-3">
            <div className="bg-main-gray-lighter rounded-lg text-center p-2 pb-5 w-3/5">
              <h4 className="text-[#88C48A] font-custom8  text-base ">
                Governance
              </h4>
              <p className="text-[#F8F7F5] mt-1 text-justify text-[11px] ">
                Governance proposals, ranging from feature enhancements to
                ecosystem expansion, are subject to voting by MANGA token
                holders, ensuring a decentralized and community-driven approach
                to platform evolution.
              </p>
            </div>

            <div className="bg-main-gray-lighter rounded-lg p-2 w-2/5">
              <h4 className="text-[#88C48A] font-custom8 text-center   text-base">
                Minting NFTs
              </h4>
              <p className="text-[#F8F7F5] mt-1 text-justify text-[11px]">
                Use Manga Tokens to mint exclusive Manga NFTs, securing your
                ownership of anime art on the blockchain.
              </p>
              <div className='flex items-start gap-x-3 mt-3'>
                <div className="w-[1.5px] h-[27px] bg-[#8F41B4]"></div>
                <span onClick={mint} className="text-[#F8F7F5] text-[13px] w-fit underline underline-offset-8 cursor-pointer" href="/">
                  Mint Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MangaMobiloe;
