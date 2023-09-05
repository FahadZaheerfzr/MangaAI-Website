import React, { useState } from 'react'
import { useHref } from 'react-router-dom';


const Navbar = ({nftRef,nftMobileRef,mangaRef,mangaMobileRef})=>{
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the mobile menu after clicking a menu item
  };
  return (

    <>
      <div className='font-Lato font-custom7'>
        <nav className=" shadow-md shadow-[#524656] bg-[#262420]">
          <div className="flex py-3 px-8 lg:!px-10 w-full items-center justify-between text-[#F8F7F5]">

            <div className="navbar-header flex">
              <a className="navbar-brand" href="/">
                <img className='w-[123px] lg:w-56' src="./images/navp1.svg" alt="error" />
              </a>
            </div>

            <div className="hamburger lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M3.60938 16.0781H17.3906M3.60938 10.8281H17.3906M3.60938 5.57812H17.3906" stroke="white" strokeWidth="2.8125" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <ul className={`hidden lg:flex h-fit !mb-0`} >
              <li>Home</li>
              <li><a className='-mt-2' href="https://t.me/mangaai_bot">Manga Ai Bot</a></li>
              <li onClick={() => scrollToSection(nftRef)}>Manga NFT</li>
              <li onClick={() => scrollToSection(mangaRef)}>$MANGA</li>
              <li><a className='-mt-2' href=" https://youtu.be/SyNWls9tDMk">Tutorial</a></li>
              <li><a className='-mt-2' href="https://manga-ai.gitbook.io/documentation/">Documentation</a></li>
            </ul>
          </div>
        </nav>

        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className='bg-[#262420] absolute w-full text-[#F8F7F5] text-center text-base py-4 font-custom7'>
            <li className='py-3'>Home</li>
            <li className='py-3'><a className='-mt-2' href="https://t.me/mangaai_bot">Manga Ai Bot</a></li>
            <li className='py-3' onClick={() => scrollToSection(nftMobileRef)}>Manga NFT</li>
            <li className='py-3' onClick={() => scrollToSection(mangaMobileRef)}>$MANGA</li>
            <li className='py-3'><a className='-mt-2' href=" https://youtu.be/SyNWls9tDMk">Tutorial</a></li>
            <li className='py-3'><a className='-mt-2' href="https://manga-ai.gitbook.io/documentation/">Documentation</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
