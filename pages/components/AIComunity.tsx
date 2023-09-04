import React from 'react'
import {FaArrowRight,FaLinkedinIn} from 'react-icons/fa'

const AIComunity = () => {
  return (
   
<div className='bg-main-gray pb-14 font-Lato'>
    <h1 className=' w-fit m-auto pt-5' >
                <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
                <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9"
                style={{ backgroundImage: 'linear-gradient(to right,#8F41B4, #7D98A6, #50C355)',}}>Manga AI Community
                </span>
     </h1>
            <p  className='  m-auto text-[#F8F7F5] lg:w-[46%] w-[75%] text-center mt-3 mb-5 lg:text-base text-xs'>Here are beautiful anime images and captivating animated artworks, all created by our skilled community using our AI technology.</p>
            <div className='w-fit  mb-12'>
                 <img className='w-[75%]  m-auto' src="./images/divu1.svg" alt="error" />
            </div>

            <button className="rounded-md text-[#F8F7F5] bg-gradient-to-r from-purple-500 to-green-500 p-2 flex m-auto lg:mt-4 mt-3 pt-3">Create Your Anime Art Now <p className='ml-6 mt-1'><FaArrowRight/></p></button>
               
</div>

  )
}

export default AIComunity
