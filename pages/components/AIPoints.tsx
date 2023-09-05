import React from 'react'

const AIPoints = () => {
  return (
    
<div className='bg-main-gray pb-72 hidden lg:block font-Lato'>
        <h1 className=' w-fit m-auto pt-[20%]' >
            <span
            className="bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 text-transparent bg-clip-text 'containor'>
            <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9"
            style={{ backgroundImage: 'linear-gradient(to right, #8F41B4, #7D98A6, #50C355)',}}>Manga AI Points
            </span>
        </h1>
        <p  className='  ml-96 text-[#F8F7F5] w-[59%] mt-3'>At Manga AI, we highly value the contributions of our users. In pursuit of this, we're excited to introduce Manga <br/> AI Points – a dynamic system that rewards the creativity and active participation of our MANGA AI Bot users</p>
       
        <img className="  w-full h-fit" src="./images/divq1.svg" alt="error" />


          <div className='mt-[-45%] relative top-0   flex left-0 w-full h-full items-center justify-center pb-24 ' id='containor'>
                <div className='bg-gray-800 rounded-lg  pl-5 justify-center relative z-10 w-fit p-4 '>
                    <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-lg w-36 m-auto text-center pb-4 pt-5'>
                    How it Works
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-5'>
                    For every image crafted using the MANGA AI Bot, users earn 1 Manga AI Point. With a daily limit of 3 generated images per user, dedicated enthusiasts can get up to 3 points each day. Points are exclusive to the official MANGA AI group. Only images generated within this group qualify for points.
                    </p>                   
                </div>

                <div className='bg-gray-800 rounded-lg  pl-5 justify-center float-left  ml-5 relative z-10 w-fit p-4'>
                    <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-lg  m-auto text-center pb-4 pt-5'>
                    Gems of Potential
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-5'>
                    Imagine Manga AI Points as precious gems you're collecting on your creative journey. These gems hold potential value for future opportunities within the expansive MANGA AI ecosystem. As our platform evolves, these points could unlock diverse, exciting possibilities and rewards.
                    </p>
                </div>

                <div className='bg-gray-800 rounded-lg  pl-5 justify-center ml-5 relative z-10 w-fit p-4 '>
                    <h1 className='text-[#88C48A] font-custom8 justify-center lg:text-lg text-lg w-40 m-auto text-center pb-8 mt-5'>
                    Your Dedication Rewarded
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-6 '>
                    Your commitment to the MANGA AI community is immensely valued, and Manga AI Points are our token of appreciation. Keep producing remarkable images, accumulate your points, and anticipate the exciting prospects these gems will unveil.
                    </p>
                </div>

          </div>
        
</div>


  )
}

export default AIPoints
