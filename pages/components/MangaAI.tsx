import React from 'react'
import {IoMdCopy} from 'react-icons/io'
import {FaArrowRight,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineMail,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'

const MangaAI = () => {
  return (

<div className='bg-main-purple w-full pb-3 font-Lato'>
      <h1 className='text-[#A075B4] text-3xl lg:text-4xl m-auto w-fit pt-14 font-custom9'>MANGA AI</h1>

      <div className='flex lg:space-x-20 m-auto pt-14 w-fit lg:text-base text-xs space-x-4'>
            <div className='text-[#F8F7F5] leading-3 flex'>
              <div><p className=' rounded-full bg-[#573F6A] w-fit p-2 text-3xl mr-2'><AiOutlineMail/></p></div>
               <div> <p>Contact us at</p>
                <p>Info@Mangaai.com</p></div>
            </div>

            <div className='text-[#F8F7F5] leading-3 flex'>
              <div><p className=' rounded-full bg-[#573F6A] w-fit p-2 text-3xl mr-2'><AiOutlineTwitter/></p></div>
                <div><p>Follow us on Twitter</p>
                <p>@mangaaiofficial</p></div>
            </div>

      </div>

  <div className='m-auto lg:pt-14 pt-10 lg:w-fit lg:text-base text-[6.9px]'>
  <nav className='bg-transparent'>
    <ul className='flex flex-row lg:space-x-4 cursor-pointer -space-x-6 -ml-8'>
      <li className='text-[#F8F7F5]'>Home</li>
      <li className='text-[#F8F7F5]'>Manga Ai Bot</li>
      <li className='text-[#F8F7F5]'>Manga NFT</li>
      <li className='text-[#F8F7F5]'>$MANGA</li>
      <li className='text-[#F8F7F5]'>Tutorial</li>
      <li className='text-[#F8F7F5]'>Documentation</li>
    </ul>
  </nav>
</div>


        <div className='w-full m-auto '>
             <div className='border-1 lg:w-[50%] w-52 border-white rounded-full inline-block mb-10 mr-2 mt-3 lg:ml-[28%] m-20'></div>
        </div>

        <div className=' lg:p-10 bg-main-purple-dark w-fit rounded-2xl m-auto lg:text-base text-sm p-3'>
        <h1 className='text-purple-400 text-3xl lg:text-4xl m-auto w-fit font-custom7'>Newsletter</h1>
        <p className='text-[#F8F7F5] w-fit m-auto pt-3 pb-2'>Sign up for newsletter and join our tribe</p>
        <div className="input-group mb-3  border-white pb-3">
  <input type="text" className="form-control w-fit" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary text-[#F8F7F5]" type="button" id="button-addon2">Subscribe</button>
</div>

        </div>
        <div className='p-3 pt-5 w-fit space-x-2 lg:space-x-5 m-auto'>
            <a className='text-[#F8F7F5] rounded-full bg-[#573F6A] text-2xl p-3 w-fit inline-block' href="/"><AiOutlineMail/></a>
            <a className='text-[#F8F7F5] rounded-full bg-[#573F6A] text-2xl p-3 w-fit inline-block' href="/"><AiOutlineTwitter/></a>
            <a className='text-[#F8F7F5] rounded-full bg-[#573F6A] text-2xl p-3 w-fit inline-block' href="/"><FaLinkedinIn/></a>
            <a className='text-[#F8F7F5] rounded-full bg-[#573F6A] text-2xl p-3 w-fit inline-block' href="/"><FiGithub/></a>
            <a className='text-[#F8F7F5] rounded-full bg-[#573F6A] text-2xl p-3 w-fit inline-block' href="/"><AiOutlineInstagram/></a>
        </div>

        <div className='w-full m-auto '>
             <div className='border-1 w-[40%] border-white rounded-full inline-block mb-8 mr-2 mt-1 ml-[30%] '></div>
        </div>

        <p className='text-[#F8F7F5] w-fit m-auto lg:text-base text-sm'>Copyright 2023 MangaAI. All Rights Reserved</p>
       
</div >
  )
}

export default MangaAI
