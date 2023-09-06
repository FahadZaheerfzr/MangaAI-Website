import React from 'react'

const GetInvolved = () => {
  return (
 
<div className='bg-main-gray w-full h-full hidden lg:flex font-Lato flex-col justify-center items-center relative py-8 gap-4'>
            <h1 className=' ' >
                <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
                <div className='bg-main-gray-lighter rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9 text-[54px]"
                style={{ backgroundImage: 'linear-gradient(to right, #8F41B4, #7D98A6, #50C355)',}}>Get Involved
                </span>
            </h1>
            <img className=" absolute z-10 top-20 lg:block hidden " src="./images/divw1.svg" alt="error" />
            <img className=" absolute  top-[80%] lg:block hidden" src="./images/divw2.svg" alt="error" />
      <div className='px-20 py-10 items-center justify-center  flex flex-col gap-4 w-10/12 relative z-10'>
            
                  <div className='flex gap-4'>
                          <div className='bg-main-gray-lighter   p-8 rounded-3xl   justify-center relative z-10 w-1/2  lg:px-16  gap-4 flex flex-col'>
                              <h1 className='text-[#88C48A] lg:text-4xl font-extrabold capitalize  justify-center text-lg  text-center '>
                              Participate in AI Art Contests
                              </h1>
                              <p className='text-[#F8F7F5]  text-justify text-[23px] font-medium'>
                              Join our monthly AI art contests, showcasing your talent based on specific themes. Win rewards and recognition while contributing to a growing community.
                              </p>                   
                          </div>

                          <div className='bg-main-gray-lighter  p-8 rounded-3xl   justify-center     z-10 w-1/2 lg:px-16  gap-4 flex flex-col'>
                              <h1 className='text-[#88C48A] lg:text-4xl font-extrabold capitalize  justify-center text-lg   text-center '>
                                Explore NFTs
                              </h1>
                              <p className='text-[#F8F7F5]  text-justify text-[23px] font-medium'>
                              Dive into the world of Manga NFTs, where owning art means owning a piece of anime history. Collect, trade, and showcase your NFTs with pride.
                              </p>
                          </div>
                  </div>

                  <div className='flex gap-4 '>
                          <div className='bg-main-gray-lighter  p-8 rounded-3xl   justify-center z-10 w-1/2 lg:px-16  gap-4 flex flex-col '>
                              <h1 className='text-[#88C48A] lg:text-4xl font-extrabold capitalize  justify-center text-lg   text-center '>
                              Collaborate with Studios
                              </h1>
                              <p className='text-[#F8F7F5]  text-justify text-[23px] font-medium'>
                              Build bridges between creators and established anime studios. Benefit from shared expertise and take your projects to new heights.
                              </p>
                          </div>

                          <div className='bg-main-gray-lighter  rounded-3xl   justify-center  relative z-10 w-1/2 lg:px-16  gap-4 flex flex-col '>
                              <h1 className='text-[#88C48A] lg:text-4xl font-extrabold capitalize  justify-center text-lg   text-center '>
                              Engage and Shape
                              </h1>
                              <p className='text-[#F8F7F5]  text-justify text-[23px] font-medium'>
                              Be a part of our vibrant community. Share feedback, participate in events, and help shape the future of Manga AI.
                              </p>
                          </div>

                      </div>

        </div>
        
</div>


  )
}

export default GetInvolved
