import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';

const WhyChooseSlider = () => {
  return (
    <div className='bg-gray-950 relative md:hidden font-Lato'>
        <h1 className=' w-fit m-auto pt-11' >
        <span
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
        <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 font-custom9"
        style={{ backgroundImage: 'linear-gradient(to right, #8B008B, #8B5CF6, #00FF00)',}}>Why Choose Manga AI?
        </span>
        </h1>
    <img className="absolute lg:relative w-full h-fit" src="./images/divq1.svg" alt="error" />

<div className=''>
<Carousel
  showArrows={true} // Show navigation arrows
  infiniteLoop={true} // Loop through the slides
  interval={3000} // Interval between slides in milliseconds
  showStatus={false} // Hide the slide status indicators
  showThumbs={false} // Hide the thumbnail navigation
  className="carousel-container "
  autoPlay={true} // Add auto-play
>
    
  <div className="carousel-slide " >
    {/* Content for the first slide */}
     
    <div className='bg-gray-800 rounded-lg  pl-5 justify-center relative z-10 w-fit p-4 '>
                    <h1 className='text-[#88C48A]  font-custom8 justify-center lg:text-lg text-lg w-36 m-auto text-center pb-4'>
                    Empower Your Creativity
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-5 font-custom4 text-xs'>
                    Our AI-powered platform give you the freedom to bring your anime visions to life. From character designs to background art, you're in control of every detail.
                    </p>
                    <button className="rounded-md text-[#F8F7F5] bg-gradient-to-r from-purple-500 to-green-500 p-2 flex m-auto lg:mt-4 mt-3 ">Generate Anime Art </button>
                </div>
                     
  </div>
  <div className="carousel-slide">
    {/* Content for the second slide */}
    <div className='bg-gray-800 rounded-lg  pl-5 justify-center float-left  ml-5 relative z-10 w-fit p-4'>
                    <h1 className='text-[#88C48A]  font-custom8 justify-center lg:text-lg text-lg w-36 m-auto text-center pb-4'>
                    Join a Vibrant Community
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-5 font-custom4 text-xs'>
                    Connect with fellow creators, enthusiasts,  and  industry professionals in an environment designed to foster collaboration and innovation.
                    </p>
                    <button className="rounded-md text-[#F8F7F5] bg-gradient-to-r from-purple-500 to-green-500 p-2 flex  lg:mt-4 mt-3 m-auto mb-2">Generate Anime Art </button>
                </div>
  </div>

  <div className="carousel-slide">
    {/* Content for the third slide */}
    <div className='bg-gray-800 rounded-lg  pl-5 justify-center ml-5 relative z-10 w-fit p-4'>
                    <h1 className='text-[#88C48A] font-custom8 justify-center lg:text-lg text-lg w-20 m-auto text-center pb-4'>
                    Elevate Quality
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-4 font-custom4 text-xs'>
                    Experience the excellence of professional-grade animation. Our tools streamline the production process, ensuring that your creations are visually captivating and emotionally resonant.
                    </p>
                    <button className="rounded-md text-[#F8F7F5] bg-gradient-to-r from-purple-500 to-green-500 p-2  flex lg:mt-4 mt-3 m-auto">Generate Anime Art </button>
                </div>
  </div> 
</Carousel>
</div>

<div className='w-full'>
  <h2 className=' pt-16 lg:pt-32 m-auto text-left w-fit lg:text-left pb-5' >
            <span
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
            <div className='bg-gray-800 rounded-lg lg:w-1/3  pl-5 justify-center relative z-10"
            style={{ backgroundImage: 'linear-gradient(to right, #8B008B, #8B5CF6, #00FF00)',}}>Manga AI Membership NFT 
            </span>
            </h2>

    <div className='flex pb-16 text-xs lg:text-base' >
      
        <div className='lg:ml-20 ml-2 w-fit pl-2 p-2'>
            <h4 className='text-sm lg:text-lg'>
            <span
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
            <div className='bg-gray-800 rounded-lg lg:w-1/3 lg:pl-5 justify-center relative z-10"
            style={{ backgroundImage: 'linear-gradient(to right, #8B008B, #8B5CF6, #00FF00)',}}> Unlock Special Utilities
            </span>
            </h4>
            <p className='text-[#F8F7F5] lg:w-[60%] w-[88%]  text-justify'>Introducing the Manga AI Membership NFT, your ticket to a world filled with exclusive utilities within the Manga AI ecosystem. This pass doesn't just give you instant access to utilities that are available now  – it's your key to a future filled with even more possibilities.</p>
            <div className='border-1 h-7 border-purple-500 rounded-full inline-block mb-2 mr-3 ml-1  float-left'></div>
            <a className='text-[#F8F7F5]' href="/">Discover More</a>
        </div>

        <div className='lg:bg-gray-900 w-fit rounded-lg lg:pt-7 pt-24 pb-3 mr-2'>
              <div className='lg:pl-7 pl-3'>
                    <h4 className='text-sm lg:text-lg'>
                      <span
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor '>
                      <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 "
                      style={{ backgroundImage: 'linear-gradient(to right, #8B008B, #8B5CF6, #00FF00)',}}> What You Get
                      </span>
                      </h4>

                      <p className='text-[#F8F7F5] w-[100%] lg:text-w-[80%] text-justify pt-2 pb-3'>
                      For just $MANGA worth 0.1 BNB, you can secure this Membership NFT. Once you have it, you'll enjoy all the live utilities for a year. That's a whole year of enhanced benefits. And if you're loving what you're getting (we think you will), you can simply mint another NFT after a year to keep enjoying those special utilities.
                      </p>
                      <div className='border-1 h-7 border-purple-500 rounded-full inline-block mb-2 mr-3 ml-1  float-left'></div>
                      <a className='text-[#F8F7F5]' href="/">Mint Now</a>
                </div>
          </div>
  </div>
</div>
</div>
  )
}

export default WhyChooseSlider
