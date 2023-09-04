import React from 'react'

const GetInvolved = () => {
  return (
 
<div className='bg-main-gray pb-32 w-full h-full hidden lg:block font-Lato'>
            <h1 className=' w-fit m-auto pt-14 ' >
                <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
                <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9"
                style={{ backgroundImage: 'linear-gradient(to right, #8F41B4, #7D98A6, #50C355)',}}>Get Involved
                </span>
            </h1>
            <img className=" absolute " src="./images/divw1.svg" alt="error" />

      <div className='pt-14 m-auto w-fit items-center justify-center pb-10 ' id='containor'>

                  <div className='flex'>
                          <div className='bg-gray-800 rounded-lg  pl-5 justify-center relative z-10 w-fit p-4 '>
                              <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-lgm-auto text-center pb-4'>
                              Participate in AI Art Contests
                              </h1>
                              <p className='text-[#F8F7F5] w-96 m-auto text-justify pb-5'>
                              Join our monthly AI art contests, showcasing your talent based on specific themes. Win rewards and recognition while contributing to a growing community.
                              </p>                   
                          </div>

                          <div className='bg-gray-800 rounded-lg  pl-5 justify-center   ml-5  z-10 w-fit p-4'>
                              <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-lg w-36 m-auto text-center pb-4'>
                                Explore NFTs
                              </h1>
                              <p className='text-[#F8F7F5] w-96 m-auto text-justify pb-5'>
                              Dive into the world of Manga NFTs, where owning art means owning a piece of anime history. Collect, trade, and showcase your NFTs with pride.
                              </p>
                          </div>
                  </div>

                  <div className='mt-4 flex'>
                          <div className='bg-gray-800 rounded-lg  pl-5 justify-center z-10 w-fit p-4'>
                              <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-lg  m-auto text-center pb-4'>
                              Collaborate with Studios
                              </h1>
                              <p className='text-[#F8F7F5] w-96 m-auto text-justify pb-5'>
                              Build bridges between creators and established anime studios. Benefit from shared expertise and take your projects to new heights.
                              </p>
                          </div>

                          <div className='bg-gray-800 rounded-lg  pl-5 justify-center ml-5 relative z-10 w-fit p-4'>
                              <h1 className='text-[#88C48A] font-custom8  justify-center lg:text-lg text-lg  m-auto text-center pb-4'>
                              Engage and Shape
                              </h1>
                              <p className='text-[#F8F7F5] w-96 m-auto text-justify pb-5'>
                              Be a part of our vibrant community. Share feedback, participate in events, and help shape the future of Manga AI.
                              </p>
                          </div>

                      </div>

        </div>
        
</div>


  )
}

export default GetInvolved
