import React from 'react'

const MangaTokenomics = () => {
  return (
    
<div className='bg-[#262420] pb-16 font-Lato'>
  <div className='w-full lg:w-[90%] m-auto'>

    <h1 className=' w-fit  pt-11 lg:text-[54px] text-[26px] font-custom9' >
                <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
                <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9"
                style={{ backgroundImage: 'linear-gradient(to right, #8F41B4, #7D98A6, #50C355)',}}>$MANGA Tokenomics
                </span>
                </h1>

        <div className='flex items-center gap-x-3'>
                <div className='bg-[#3D3D3D] w-[55%] lg:w-2/3 xl:w-[45%] rounded-lg lg:p-9 p-3 mt-12  ml-2'>
                  <div className='inline-flex items-center lg:pt-7'>
                      <h4 className='text-[#A075B4] lg:text-[36px] text-base font-custom8'>Transfer Tax</h4>
                      <div className='bg-gray-600 text-[#A7FFAA] rounded-3xl w-14 text-center lg:p-3  ml-6 lg:ml-44 font-custom8 lg:text-[27px] text-[13px]'>0%</div></div>
                      <p className='text-[#F8F7F5] lg:w-[90%] w-full  pt-1 pb-1 lg:text-[23px] lg:leading-[32px] leading-[14px]  text-[11px] '>You can transfer your tokens across your wallets without any payment.</p>
                      <div className='border w-[90%] border-[#767A82] rounded-full inline-block lg:my-4 mr-2  m-auto  '></div>

                      <div className='inline-flex pt-4'>
                      <h4 className='text-[#A075B4] lg:text-[36px] text-base font-custom8'>Buy Tax</h4>
                      <div className='bg-gray-600 text-[#A7FFAA] rounded-3xl w-14 text-center lg:p-3  ml-14 lg:ml-60 font-custom8 lg:text-[27px] text-[13px]'>4%</div></div>
                      <p className='text-[#F8F7F5] lg:w-[90%] w-full  pt-1 pb-1 lg:text-[23px] lg:leading-[32px] leading-[14px]  text-[11px]'>Purchase $Manga with 4% tx - 2% to marketing, 1% to Ecosystem,  1% to lp</p>
                      <div className='border w-[90%] border-[#767A82] rounded-full inline-block lg:my-4 mr-2  m-auto  '></div>

                      <div className='inline-flex items-center pt-4'>
                      <h4 className='text-[#A075B4] lg:text-[36px] text-base  font-custom8'>Sell Tax</h4>
                      <div className='bg-gray-600 text-[#A7FFAA] rounded-3xl w-14 text-center lg:p-3  ml-14 lg:ml-60 font-custom8 lg:text-[27px] text-[13px]'>4%</div></div>
                      <p className='text-[#F8F7F5] lg:w-[90%] w-full  pt-1 pb-1 lg:text-[23px] lg:leading-[32px] leading-[14px]  text-[11px]'>Sell $Manga with 4% tx - 2% to marketing, 1% to Ecosystem,  1% to lp</p>
                 </div>

                 <div>
                  <img className='lg:hidden' src='/images/tokenomics-mobile.svg'/>
                      <img className='hidden lg:block lg:w-full lg:ml-2 w-full h-full lg:h-auto' src="./images/divr1.svg" alt="error" />
                 </div>
                 
        </div>    
   </div>
</div>

  )
}

export default MangaTokenomics