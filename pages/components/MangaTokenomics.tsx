import React from 'react'

const MangaTokenomics = () => {
  return (
    
<div className='bg-main-gray pb-16 font-Lato'>
    <h1 className=' w-fit ml-[8%] pt-11' >
                <span
                className="bg-gradient-to-r  from-fuchsia-700 via-slate-500 to-green-500 text-transparent bg-clip-text 'containor'>
                <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9"
                style={{ backgroundImage: 'linear-gradient(to right, #8F41B4, #7D98A6, #50C355)',}}>$MANGA Tokenomics
                </span>
                </h1>

        <div className='flex'>
                <div className='bg-gray-800 w-fit rounded-lg lg:p-9 p-3 mt-12  lg:ml-[8%] ml-2'>
                  <div className='flex'>
                      <h4 className='text-[#A075B4] lg:text-2xl text-base pt-1 font-custom8'>Transfer Tax</h4>
                      <div className='bg-gray-600 text-[#A7FFAA] rounded-xl w-14 text-center p-2 ml-7 lg:ml-16 font-custom8 lg:text-base text-sm'>0%</div></div>
                      <p className='text-[#F8F7F5] lg:w-72 w-44 text-justify pt-1 pb-1 lg:text-base text-xs '>You can transfer your tokens across your wallets without any payment.</p>
                      <div className="w-[429px] h-[0px] border border-zinc-500 mt-5"></div>
                      <div className='border-1 w-[90%] border-white rounded-full inline-block mb-2 mr-2  m-auto  '></div>

                      <div className='flex'>
                      <h4 className='text-[#A075B4]  lg:text-2xl text-base pt-1 font-custom8'>Buy Tax</h4>
                      <div className='bg-gray-600 text-[#A7FFAA] rounded-xl w-14 text-center p-2 ml-14 lg:ml-28 font-custom8 lg:text-base text-sm'>4%</div></div>
                      <p className='text-[#F8F7F5] lg:w-72 w-44 text-justify pt-1 pb-1 lg:text-base text-xs'>Purchase $Manga with 4% tx - 2% to marketing, 1% to Ecosystem,  1% to lp</p>
                      <div className="w-[429px] h-[0px] border border-zinc-500 mt-5"></div>
                      <div className='border-1 w-[90%] border-white rounded-full inline-block mb-2 mr-2  m-auto  '></div>

                      <div className='flex'>
                      <h4 className='text-[#A075B4]  lg:text-2xl text-base pt-1 font-custom8'>Sell Tax</h4>
                      <div className='bg-gray-600 text-[#A7FFAA] rounded-xl w-14 text-center p-2 ml-14 lg:ml-28 font-custom8 lg:text-base text-sm'>4%</div></div>
                      <p className='text-[#F8F7F5] lg:w-72 w-44 text-justify pt-1 pb-1 lg:text-base text-xs'>Sell $Manga with 4% tx - 2% to marketing, 1% to Ecosystem,  1% to lp</p>
                 </div>

                 <div>
                      <img className='lg:w-[64%] lg:ml-16 w-full h-full lg:h-auto' src="./images/divr1.svg" alt="error" />
                 </div>
                 
        </div>    

</div>

  )
}

export default MangaTokenomics
