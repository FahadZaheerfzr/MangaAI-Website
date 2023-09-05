import React from 'react'

const MangaMainNft = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full hidden lg:block">
      <div className="w-full mt-32">
        <div className="flex pb-16 text-xs lg:text-base ">
          <div className="lg:ml-16 ml-2 w-fit ">
            <h2 className=" text-left lg:text-[50px] lg:text-left mb-10 w-fit">
              <span
                className="text-transparent bg-clip-text font-[900]" style={{ backgroundImage: "linear-gradient(to right, #8F41B4, #7D98A6, #50C355)", }}>
                Manga AI Membership NFT
              </span>
            </h2>
            <h4 className="text-sm lg:text-[32px] mb-4 pt-3 w-fit">
              <span
                className=" text-transparent bg-clip-text font-custom9"
                style={{ backgroundImage: "linear-gradient(to right,#8F41B4, #7D98A6, #50C355)", }}>
                Unlock Special Utilities
              </span>
            </h4>
            <p className="text-[#F8F7F5] font-normal lg:w-[95%] text-justify pb-4 mt-16 w-[78%] leading-[34px] lg:text-[23px]">
              Introducing the Manga AI Membership NFT, your ticket to a world
              filled with exclusive utilities within the Manga AI ecosystem.
              This pass doesn't just give you instant access to utilities that
              are available now  – it's your key to a future filled with even
              more possibilities.
            </p>
            <div className='flex items-center gap-x-5'>
              <div className="lg:w-[3px] lg:h-[57px] bg-[#8F41B4]"></div>
              <a className="text-[#F8F7F5] lg:text-[26px] w-fit underline underline-offset-8" href="/">
                Discover More
              </a>
            </div>
          </div>

          <div className="bg-main-gray-lighter w-fit rounded-lg lg:py-16 ml-16">
            <div className="lg:pl-16 pl-5">
              <h4 className="text-sm lg:text-[36px] font-custom9">
                <span
                  className="text-transparent bg-clip-text text-[36px] font-custom9"
                  style={{ backgroundImage: "linear-gradient(to right, #8F41B4, #7D98A6, #50C355)", }}>
                  What You Get
                </span>
              </h4>

              <p className="text-[#F8F7F5] font-nromal lg:w-[90%] w-[78%] leading-[34px] lg:text-[23px] text-justify mt-11 pb-3">
                For just $MANGA worth 0.1 BNB, you can secure this Membership
                NFT. Once you have it, you'll enjoy all the live utilities for
                a year. That's a whole year of enhanced benefits. And if
                you're loving what you're getting (we think you will), you can
                simply mint another NFT after a year to keep enjoying those
                special utilities.
              </p>
              <div className='flex items-center gap-x-5 mt-10'>
                <div className="lg:w-[3px] lg:h-[57px] bg-[#8F41B4]"></div>
                <a className="text-[#F8F7F5] lg:text-[26px] w-fit underline underline-offset-8" href="/">
                  Mint Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default MangaMainNft