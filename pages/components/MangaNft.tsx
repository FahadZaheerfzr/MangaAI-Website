import React from 'react'

const MangaNft = React.forwardRef((props, ref) => {
    return (
      <div className='w-full md:hidden'>
        <h2 className='pt-16 lg:pt-32 m-auto text-left w-fit lg:text-left pb-5 mb-5'>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text container">
            <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10' style={{ backgroundImage: 'linear-gradient(to right, #8F41B4, #7D98A6, #50C355)' }}>
              Manga AI Membership NFT 
            </div>
          </span>
        </h2>
  
        <div className='flex pb-16 text-xs lg:text-base'>
          <div className='lg:ml-20 ml-2 w-fit pl-2 p-2'>
            <h4 className='text-sm lg:text-lg'>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Unlock Special Utilities
              </span>
            </h4>
            <p className='text-[#F8F7F5] lg:w-[60%] w-[88%] text-justify'>Introducing the Manga AI Membership NFT, your ticket to a world filled with exclusive utilities within the Manga AI ecosystem. This pass doesn't just give you instant access to utilities that are available now – it's your key to a future filled with even more possibilities.</p>
            <div className='border-1 h-7 border-purple-500 rounded-full inline-block mb-2 mr-3 ml-1 float-left'></div>
            <a className='text-[#F8F7F5]' href="/">Discover More</a>
          </div>
  
          <div className='lg:bg-gray-900 w-fit rounded-lg lg:pt-7 pt- pb-3 mr-2'>
            <div className='lg:pl-7 pl-3'>
              <h4 className='text-sm lg:text-lg'>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  What You Get
                </span>
              </h4>
  
              <p className='text-[#F8F7F5] w-[100%] lg:text-w-[80%] text-justify pt-2 pb-3'>
                For just $MANGA worth 0.1 BNB, you can secure this Membership NFT. Once you have it, you'll enjoy all the live utilities for a year. That's a whole year of enhanced benefits. And if you're loving what you're getting (we think you will), you can simply mint another NFT after a year to keep enjoying those special utilities.
              </p>
              <div className='border-1 h-7 border-purple-500 rounded-full inline-block mb-2 mr-3 ml-1 float-left'></div>
              <a className='text-[#F8F7F5]' href="/">Mint Now</a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  export default MangaNft