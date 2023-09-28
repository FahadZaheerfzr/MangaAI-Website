import React from "react";


const cards = [
  {
    id: 1,
    title: "Empower Your Creativity",
    description: "Our AI-powered platform give you the freedom to bring your anime visions to life. From character designs to background art, you're in control of every detail.",
  },
  {
    id: 2,
    title: "Join a Vibrant Community",
    description: "Connect with fellow creators, enthusiasts, and industry professionals in an environment designed to foster collaboration and innovation.",
  },
  {
    id: 3,
    title: "Elevate Quality",
    description: "Experience the excellence of professional-grade animation. Our tools streamline the production process, ensuring that your creations are visually captivating and emotionally resonant.",
  }
]

const WhyChoose = () => {
  return (
    <>
      <div className="bg-main-gray relative hidden lg:block font-Lato">
        <h1 className=" lg:text-[54px]  w-fit m-auto pt-11 bg-text-gradient bg-clip-text text-transparent font-custom9">
            Why Choose Manga AI?
        </h1>
        <img
          className="absolute mt-28 inset-0 w-full h-fit"
          src="./images/divq1.svg" alt="error"/>
  <div className="w-[90%] m-auto" >
            <div className="flex w-full gap-x-10 h-full items-center justify-center pt-24 pb-24" id="containor">
              {cards.map((card) => (
              <div key={card.id} className="bg-[#3D3D3D] flex flex-col h-[550px] rounded-lg justify-between relative z-10 w-1/3 px-4 ">
                <h1 className="text-[#88C48A] w-[65%]  font-custom8 justify-center lg:text-[36px] text-lg leading-10 m-auto text-center pb-4">
                  {card.title}
                </h1>
                <p className="text-[#F8F7F5] lg:text-[23px] leading-[34px] tracking-[0.46px] w-fit m-auto text-justify pb-5">
                  {card.description}
                </p>
                <button className="rounded-md text-[#F8F7F5] bg-gradient-to-r from-purple-500 to-green-500 px-4 py-1 lg:text-[26px]  flex m-auto lg:mt-4 mt-3 ">
                <a href="https://t.me/mangaaiofficial">Generate Anime Art</a>{" "}
                </button>
              </div> ))}
            </div>
  </div>



    
      </div>
    </>
  );
};

export default WhyChoose;
