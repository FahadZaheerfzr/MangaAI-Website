import React from "react";

const WhyChoose = () => {
  return (
    <>
      <div className="bg-main-gray relative hidden lg:block font-Lato">
        <h1 className=" w-fit m-auto pt-11 bg-text-gradient bg-clip-text text-transparent font-custom9">
          Why Choose Manga AI?
        </h1>
        <img
          className="absolute inset-0 w-full h-fit"
          src="./images/divq1.svg"
          alt="error"
        />

        <div
          className="flex left-0 w-full h-full  items-center justify-center pt-24 pb-24"
          id="containor">
          <div className="bg-gray-800 rounded-lg  pl-5 justify-center relative z-10 w-fit p-4 ">
            <h1 className="text-[#88C48A]  font-custom8 justify-center lg:text-lg text-lg w-36 m-auto text-center pb-4">
              Empower Your Creativity
            </h1>
            <p className="text-[#F8F7F5] w-64 m-auto text-justify pb-5">
              Our AI-powered platform give you the freedom to bring your anime
              visions to life. From character designs to background art, you're
              in control of every detail.
            </p>
            <button className="rounded-md text-[#F8F7F5] bg-gradient-to-r  from-fuchsia-700 via-slate-500 to-green-500 p-2 flex m-auto lg:mt-8 mb-3 px-4 py-3 ">
              Generate Anime Art{" "}
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg  pl-5 justify-center float-left  ml-5 relative z-10 w-fit p-4">
            <h1 className="text-[#88C48A]  font-custom8 justify-center lg:text-lg text-lg w-36 m-auto text-center pb-4 ">
              Join a Vibrant Community
            </h1>
            <p className="text-[#F8F7F5] w-64 m-auto text-justify pb-5 ">
              Connect with fellow creators, enthusiasts, and industry
              professionals in an environment designed to foster collaboration
              and innovation.
            </p>
            <button className="rounded-md text-[#F8F7F5] bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 p-2 flex  lg:mt-8 mt-4 m-auto mb-2 px-4 py-3 ">
              Generate Anime Art{" "}
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg  pl-5 justify-center ml-5 relative z-10 w-fit p-4">
            <h1 className="text-[#88C48A] font-custom8 justify-center lg:text-lg text-lg w-28 m-auto text-center pb-4">
              Elevate Quality
            </h1>
            <p className="text-[#F8F7F5] w-64 m-auto text-justify pb-4">
              Experience the excellence of professional-grade animation. Our
              tools streamline the production process, ensuring that your
              creations are visually captivating and emotionally resonant.
            </p>
            <button className="rounded-md text-[#F8F7F5] bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 p-2  flex lg:mt-4 mb-2 mt-3 m-auto px-4 py-3 ">
              Generate Anime Art{" "}
            </button>
          </div>
        </div>


      </div>
    </>
  );
};

export default WhyChoose;
