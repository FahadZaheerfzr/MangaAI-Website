import React from "react";
import { useState } from 'react'
import { useModal } from "react-simple-modal-provider";
import { useEthers } from "@usedapp/core";
import ABI from "../config/abis/abi.json"
import {contractAddress,BACKEND_URL} from "../config/constants"
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";

const MangaNft = React.forwardRef((props, ref) => {
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
    <div className='w-full lg:hidden'>
      <div className='w-full'>
        <h2 className=' pt-16 lg:pt-32 m-auto text-left w-fit lg:text-left pb-4 text-[26px] font-custom9 bg-text-gradient bg-clip-text text-transparent' >
          Manga AI Membership NFT
        </h2>

        <div className='flex pb-16' >

          <div className='lg:ml-20 ml-2 w-fit pl-2 p-2'>
            <h4 className='text-[15px] mb-5 lg:text-lg bg-text-gradient bg-clip-text text-transparent font-custom9'>
              Unlock Special Utilities
            </h4>
            <p className='text-[#F8F7F5] lg:w-[60%] w-[88%] text-[11px] font-custom4 leading-[16px] text-justify'>Introducing the Manga AI Membership NFT, your ticket to a world filled with exclusive utilities within the Manga AI ecosystem. This pass doesn't just give you instant access to utilities that are available now  – it's your key to a future filled with even more possibilities.</p>
            <div className='flex items-center gap-x-3 mt-3'>
              <div className="w-[1.5px] h-[27px] bg-[#8F41B4]"></div>
              <a className="text-[#F8F7F5] text-[13px] lg:text-[26px] w-fit underline underline-offset-8" href="https://manga-ai.gitbook.io/documentation/manga-ai-nfts/manga-ai-membership-nfts-usecase">
                Discover More
              </a>
            </div>
          </div>

          <div className='lg:bg-gray-900 w-fit rounded-lg lg:pt-7 pt-20 pb-3 mr-2'>
            <div className='lg:pl-7 pl-3'>
              <h4 className='text-[15px] mb-5 lg:text-lg bg-text-gradient bg-clip-text text-transparent font-custom9'>
                What You Get
              </h4>

              <p className='text-[#F8F7F5] lg:w-[60%] w-[88%] text-[11px] font-custom4 leading-[16px] text-justify'>
                For just 0.1 BNB, you can secure this Membership NFT. Once you have it, you'll enjoy all the live utilities for a year. That's a whole year of enhanced benefits. And if you're loving what you're getting (we think you will), you can simply mint another NFT after a year to keep enjoying those special utilities.
              </p>
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
  );
});
export default MangaNft