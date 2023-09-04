import React from 'react'

const StartGuide = () => {
  return (

<div className='bg-main-purple lg:p-12 lg:pb-0 p-4 font-Lato'>

<div className='lg:flex'>
<div className='w-fit'>
            <h1 className=' w-fit lg:text-4xl text-2xl lg:pb-2' >
                <span
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
                  <div className='bg-gray-800 rounded-lg lg:w-1/3  justify-center relative z-10 font-custom9"
                  style={{ backgroundImage: 'linear-gradient(to right,#8F41B4, #7D98A6, #50C355)',}}>Quick Start Guide
                  </span>
            </h1>
            <div className='border-1 h-7 border-purple-500 rounded-full inline-block mb-2 mr-2 lg:ml-6  float-left'></div>
            <a className='text-[#F8F7F5] ' href="/">Buy Now</a>
            <img className='mt-14 w-[65%] hidden lg:block' src="./images/divv1.svg" alt="error" />
  </div>

<div>
  <div className='lg:mt-16 mt-4 '>
    <div className='flex'>
            <div className='float-left'>
            <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-xs   pb-2 '> Set up Your Wallet</h1>
            <p className='text-[#F8F7F5] lg:w-64 w-40 lg:text-base text-xs'>Set up a MetaMask Wallet on your desktop computer or iOS/Android mobile device. This will enable you to easily buy, sell, send, and receive $Manga tokens.</p>
            </div>

            <div className='float-left lg:ml-16 ml-5'>
            <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-xs   pb-2  '> Swap BNB for $Manga</h1>
            <p className='text-[#F8F7F5] lg:w-64 w-40 lg:text-base text-xs'>Once you have BNB in your wallet, you can immediately begin swapping. Click on 'Select a token' and either input the token address or locate it in the tokens list.</p>         
            </div>
       </div>

       <div className='flex mt-7'>
                <div className='' >
                <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-xs  pb-2 '> Send BNB to your Wallet</h1>
                <p className='text-[#F8F7F5] lg:w-64 w-40 lg:text-base text-xs'>Purchase BNB directly within MetaMask or transfer it from exchanges like Coinbase, Binance, and more to your MetaMask Wallet.</p>         
                </div>

                <div className='float-left lg:ml-16 ml-5'>
                <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-xs   pb-2 '> Send BNB to your Wallet</h1>
                <p className='text-[#F8F7F5] lg:w-64 w-40 lg:text-base text-xs'>Purchase BNB directly within MetaMask or transfer it from exchanges like Coinbase, Binance, and more to your MetaMask Wallet.</p>         
                </div>
        </div>
  </div>
  </div>
  </div>
</div>

  )
}

export default StartGuide
