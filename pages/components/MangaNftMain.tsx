import React from 'react'

const MangaMainNft = React.forwardRef((props,ref)=>{
    return(
        <div ref={ref} className="w-full pt-56 mt-20 hidden lg:block">
        <div className="flex pb-16 text-xs lg:text-base">
          <div className="lg:ml-20 ml-2 w-fit">
            <h2 className=" text-left  lg:text-left mb-3">
              <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor' >
          <div className='bg-gray-800 rounded-lg lg:w-1/3  justify-center relative z-10 font-custom9 "
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #8F41B4, #7D98A6, #50C355)",
                }}
              >
                Manga AI Membership NFT
              </span>
            </h2>
            <h4 className="text-sm lg:text-lg ">
              <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
          <div className='bg-gray-800 rounded-lg lg:text-2xl lg:w-1/3  justify-center relative z-10 font-custom9 "
                style={{
                  backgroundImage:
                    "linear-gradient(to right,#8F41B4, #7D98A6, #50C355)",
                }}
              >{" "}
                Unlock Special Utilities
              </span>
            </h4>
            <p className="text-[#F8F7F5] lg:w-[60%] w-[78%]  text-left ">
              Introducing the Manga AI Membership NFT, your ticket to a world
              filled with exclusive utilities within the Manga AI ecosystem.
              This pass doesn't just give you instant access to utilities that
              are available now  – it's your key to a future filled with even
              more possibilities.
            </p>
            <div className="mt-12">

              <div className="  border-1 h-7  border-l border-fuchsia-700 rounded-full inline-block mb-2 mr-3 ml-1  float-left"></div>
              <a className="text-neutral-100 text-xl font-bold underline leading-[34px] tracking-wide ">
                Discover More
              </a>
            </div>
          </div>

          <div className="bg-main-gray-lighter w-fit rounded-lg pt-7 pb-3">
            <div className="lg:pl-10 pl-5">
              <h4 className="text-sm lg:text-xl font-custom9">
                <span
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor '>
                    <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #8F41B4, #7D98A6, #50C355)",
                  }}
                >
                  {" "}
                  What You Get
                </span>
              </h4>

              <p className="text-[#F8F7F5] w-[60%] lg:text-w-[80%] text-justify pt-2 pb-7">
                For just 0.1 BNB, you can secure this Membership
                NFT. Once you have it, you'll enjoy all the live utilities for
                a year. That's a whole year of enhanced benefits. And if
                you're loving what you're getting (we think you will), you can
                simply mint another NFT after a year to keep enjoying those
                special utilities.
              </p>
              <div className="border-1 mt-1 h-7 border-l border-fuchsia-700 rounded-full inline-block mb-8 mr-3 ml-1  float-left"></div>
              <a className=" text-neutral-100 text-xl  font-bold underline leading-[34px] tracking-wide  " href="/">
                Mint Now
              </a>
            </div>
          </div>
        </div>
      </div>
    )
})

export default MangaMainNft