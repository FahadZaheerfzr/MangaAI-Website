import React from 'react'
import { useState } from 'react'
import { IoMdCopy } from 'react-icons/io'

export default function BuyManga() {
  const [copySuccess, setCopySuccess] = useState(false);
  const inputText = '0x754E56Ce07ae030a02b5f3977Eee86C3841E4f0D';

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(inputText)
    setCopySuccess(true);

    // Clear the success message after a delay (e.g., 2 seconds)
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };
  return (
    <div className='bg-[#2E2238] flex flex-col gap-10 items-center justify-center  lg:pt-24 pt-32 pb-10'>
      <div className='w-full flex justify-center'>
        <div className='absolute py- w-2/3 max-w-[640px] '>
          <div className='pr-5 w-fit lg:py-3 border-r border-dashed border-[#F8F7F5]' onClick={copyTextToClipboard}
          style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M6.87875 5.78375L6.875 8.4375V21.5675C6.875 22.6449 7.30301 23.6783 8.06488 24.4401C8.82675 25.202 9.86006 25.63 10.9375 25.63H21.7075C21.5134 26.1784 21.1542 26.6531 20.6791 26.9889C20.2041 27.3247 19.6367 27.505 19.055 27.505H10.9375C9.36278 27.505 7.85255 26.8794 6.73905 25.7659C5.62556 24.6524 5 23.1422 5 21.5675V8.4375C5 7.2125 5.78375 6.16875 6.87875 5.78375ZM22.1875 2.5C22.5568 2.5 22.9226 2.57275 23.2638 2.71409C23.605 2.85543 23.9151 3.0626 24.1762 3.32376C24.4374 3.58493 24.6446 3.89497 24.7859 4.2362C24.9273 4.57743 25 4.94316 25 5.3125V21.5625C25 21.9318 24.9273 22.2976 24.7859 22.6388C24.6446 22.98 24.4374 23.2901 24.1762 23.5512C23.9151 23.8124 23.605 24.0196 23.2638 24.1609C22.9226 24.3023 22.5568 24.375 22.1875 24.375H10.9375C10.1916 24.375 9.47621 24.0787 8.94876 23.5512C8.42132 23.0238 8.125 22.3084 8.125 21.5625V5.3125C8.125 4.56658 8.42132 3.85121 8.94876 3.32376C9.47621 2.79632 10.1916 2.5 10.9375 2.5H22.1875ZM22.1875 4.375H10.9375C10.6889 4.375 10.4504 4.47377 10.2746 4.64959C10.0988 4.8254 10 5.06386 10 5.3125V21.5625C10 22.08 10.42 22.5 10.9375 22.5H22.1875C22.4361 22.5 22.6746 22.4012 22.8504 22.2254C23.0262 22.0496 23.125 21.8111 23.125 21.5625V5.3125C23.125 5.06386 23.0262 4.8254 22.8504 4.64959C22.6746 4.47377 22.4361 4.375 22.1875 4.375Z" fill="white" />
            </svg>
          </div>
        </div>
        <input defaultValue={inputText} className='w-2/3 max-w-[660px] pl-20 lg:text-[23px] tracking-[0.46px] lg:py-3 text-[#FFF] rounded-[14px] bg-transparent border py-3 px-3 border-dashed border-[#F8F7F5]' />
      </div>
      <button className="text-center lg:py-4 lg:px-8 px-3 py-1 text-neutral-100 lg:text-[26px] text-[13px] font-bold leading-[34px] tracking-[0.52px]  bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 rounded-[13px]" >
        Buy $Manga
      </button>
      {copySuccess && <p className="text-white">Copy Successful!</p>}
    </div>
  )
}