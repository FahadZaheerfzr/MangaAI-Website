import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';


const MangaAiSlider = () => {
  return (
    <div className='bg-main-gray lg:pb-28 pb-14 relative md:hidden font-Lato'>
    <h1 className=' w-fit m-auto pt-[20%]' >
        <span
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
        <div className='bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10"
        style={{ backgroundImage: 'linear-gradient(to right, #8B008B, #8B5CF6, #00FF00)',}}>Manga AI Points
        </span>
    </h1>
    <p  className='  m-auto text-[#F8F7F5] lg:w-[59%] lg:text-base text-xs mt-2 p-3'>At Manga AI, we highly value the contributions of our users. In pursuit of this, we're excited to introduce Manga AI Points – a dynamic system that rewards the creativity and active participation of our MANGA AI Bot users</p>
   
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
    
  <div className="carousel-slide flex justify-center" >
    {/* Content for the first slide */}
     
    <div className='bg-main-gray-lighter rounded-lg  pl-5 justify-center relative z-10 w-fit p-4 '>
                    <h1 className='text-green-500 justify-center lg:text-lg text-lg w-36 m-auto text-center pb-4'>
                    How it Works
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-5 font-custom4 text-xs'>
                    For every image crafted using the MANGA AI Bot, users earn 1 Manga AI Point. With a daily limit of 3 generated images per user, dedicated enthusiasts can get up to 3 points each day. Points are exclusive to the official MANGA AI group. Only images generated within this group qualify for points.
                    </p>                   
                </div>
                     
  </div>
  <div className="carousel-slide flex justify-center">
    {/* Content for the second slide */}
    <div className='bg-main-gray-lighter rounded-lg  pl-5 justify-center float-left   relative z-10 w-fit p-4'>
                    <h1 className='text-green-500 justify-center lg:text-lg text-lg w-36 m-auto text-center pb-4'>
                    gems of Potential
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-5 font-custom4 text-xs'>
                    Imagine Manga AI Points as precious gems you're collecting on your creative journey. These gems hold potential value for future opportunities within the expansive MANGA AI ecosystem. As our platform evolves, these points could unlock diverse, exciting possibilities and rewards.
                    </p>
                </div>
  </div>

  <div className="carousel-slide flex justify-center">
    {/* Content for the third slide */}
    <div className='bg-main-gray-lighter rounded-lg  pl-5 justify-center  relative z-10 w-fit p-4'>
                    <h1 className='text-green-500 justify-center lg:text-lg text-lg w-40 m-auto text-center pb-4'>
                    Your Dedication Rewarded
                    </h1>
                    <p className='text-[#F8F7F5] w-64 m-auto text-justify pb-5 font-custom4 text-xs'>
                    Your commitment to the MANGA AI community is immensely valued, and Manga AI Points are our token of appreciation. Keep producing remarkable images, accumulate your points, and anticipate the exciting prospects these gems will unveil.
                    </p>
                </div>
  </div> 
</Carousel>
</div>
</div>
);
};

export default MangaAiSlider
