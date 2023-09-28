import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="bg-main-gray md:hidden p-7 flex flex-col justify-center items-center relative">
      <h1 className="   ">
        <span
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8F41B4, #7D98A6, #50C355)",
          }}
        >
          Get Involved
        </span>
      </h1>
      <img className=" absolute top-0" src="./images/divw1.svg" alt="error" />
      <img className=" absolute bottom-0" src="./images/divw2.svg" alt="error" />

      <Carousel
        showArrows={true} // Show navigation arrows
        infiniteLoop={true} // Loop through the slides
        interval={2000} // Interval between slides in milliseconds
        showStatus={false} // Hide the slide status indicators
        showThumbs={false} // Hide the thumbnail navigation
        className="carousel-container"
        autoPlay={true} // Add auto-play
      >
        <div className="carousel-slide relative z-10 flex justify-center">
          {/* Content for the first slide */}

          <div className="bg-main-gray-lighter rounded-lg  pl-5 justify-center relative z-10 w-fit p-4 text-xs sm:text-base">
            <h1 className="text-[#88C48A] justify-center sm:text-lg text-sm text-center pb-4">
              Participate in AI Art Contests
            </h1>
            <p className="text-[#F8F7F5] sm:w-96 m-auto text-justify pb-4">
              Join our monthly AI art contests, showcasing your talent based on
              specific themes. Win rewards and recognition while contributing to
              a growing community.
            </p>
          </div>
        </div>
        <div className="carousel-slide relative z-10 flex justify-center">
          {/* Content for the second slide */}
          <div className="bg-main-gray-lighter rounded-lg  pl-5 justify-center ml-5  z-10 w-fit p-4 text-xs sm:text-base">
            <h1 className="text-[#88C48A] justify-center sm:text-lg text-sm w-36 m-auto text-center pb-4">
              Explore NFTs
            </h1>
            <p className="text-[#F8F7F5] sm:w-96 m-auto text-justify pb-5">
              Dive into the world of Manga NFTs, where owning art means owning a
              piece of anime history. Collect, trade, and showcase your NFTs
              with pride.
            </p>
          </div>
        </div>

        <div className="carousel-slide relative z-10 flex justify-center">
          {/* Content for the third slide */}
          <div className="bg-main-gray-lighter rounded-lg  pl-5 justify-center z-10 w-fit p-4 text-xs sm:text-base">
            <h1 className="text-[#88C48A] justify-center sm:text-lg text-sm  m-auto text-center pb-4">
              Collaborate with Studios
            </h1>
            <p className="text-[#F8F7F5] sm:w-96 m-auto text-justify pb-5">
              Build bridges between creators and established anime studios.
              Benefit from shared expertise and take your projects to new
              heights.
            </p>
          </div>
        </div>

        <div className="carousel-slide flex justify-center">
          {/* Content for the fourth slide */}
          <div className="bg-main-gray-lighter rounded-lg  pl-5 justify-center ml-5 relative z-10 w-fit p-4 text-xs sm:text-base">
            <h1 className="text-[#88C48A] justify-center sm:text-lg text-sm  m-auto text-center pb-4">
              Engage and Shape
            </h1>
            <p className="text-[#F8F7F5] sm:w-96 m-auto text-justify pb-5">
              Be a part of our vibrant community. Share feedback, participate in
              events, and help shape the future of Manga AI.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
