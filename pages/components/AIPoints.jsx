import React from "react";

const AIPoints = () => {
  return (
    <div className="bg-main-gray lg:flex lg:flex-col hidden items-center pb-32 pt-56 font-Lato relative gap-10 h-full px-10">
      <h1 className=" z-10">
        <span
          className="bg-gradient-to-r from-fuchsia-700 via-slate-500 to-green-500 text-transparent bg-clip-text
                bg-gray-800 rounded-lg lg:w-1/3 pl-5 justify-center relative z-10 lg:text-[54px] text-[26px] font-black "
          style={{
            backgroundImage:
              "linear-gradient(to right,#8F41B4, #7D98A6, #50C355)",
          }}
        >
          Manga AI Points
        </span>
      </h1>
      <p className="  text-[#F8F7F5]   z-10">
        At Manga AI, we highly value the contributions of our users. In pursuit
        of this, we're excited to introduce Manga <br /> AI Points – a dynamic
        system that rewards the creativity and active participation of our MANGA
        AI Bot users
      </p>

      <img className="  absolute z-0 h-max" src="./images/divq1.svg" alt="error" />

      <div
        className=" relative  flex left-0 w-full items-center justify-center gap-7"
      >
        <div className="bg-main-gray-lighter rounded-[28px]  p-5 justify-center relative z-10 w-1/3 flex flex-col gap-8 items-center ">
          <h1 className="text-[#88C48A] font-custom8  justify-center lg:text-4xl text-lg text-center w-full">
            How it Works
          </h1>
          <p className="text-[#F8F7F5] lg:text-[23px]  text-justify pb-5 px-5">
            For every image crafted using the MANGA AI Bot, users earn 1 Manga
            AI Point. With a daily limit of 3 generated images per user,
            dedicated enthusiasts can get up to 3 points each day. Points are
            exclusive to the official MANGA AI group. Only images generated
            within this group qualify for points.
          </p>
        </div>

        <div className="bg-main-gray-lighter rounded-[28px]  p-5 justify-center float-left   relative z-10 w-1/3 flex flex-col gap-8 items-center">
          <h1 className="text-[#88C48A] font-custom8  justify-center lg:text-4xl text-lg text-center  w-full">
            Gems of Potential
          </h1>
          <p className="text-[#F8F7F5] lg:text-[23px]  text-justify pb-5 px-5">
            Imagine Manga AI Points as precious gems you're collecting on your
            creative journey. These gems hold potential value for future
            opportunities within the expansive MANGA AI ecosystem. As our
            platform evolves, these points could unlock diverse, exciting
            possibilities and rewards.
          </p>
        </div>

        <div className="bg-main-gray-lighter rounded-[28px]  p-5 justify-center  relative z-10 w-1/3 flex flex-col gap-8 items-center ">
          <h1 className="text-[#88C48A] font-custom8 justify-center lg:text-4xl text-lg text-center  w-full">
            Your Dedication Rewarded
          </h1>
          <p className="text-[#F8F7F5] lg:text-[23px]  text-justify pb-6 px-6 ">
            Your commitment to the MANGA AI community is immensely valued, and
            Manga AI Points are our token of appreciation. Keep producing
            remarkable images, accumulate your points, and anticipate the
            exciting prospects these gems will unveil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIPoints;
