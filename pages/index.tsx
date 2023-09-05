import Image from 'next/image'
import { Lato } from 'next/font/google'
import Navbar from './components/Navbar'
import WhyChoose from './components/WhyChoose'
import Manga from './components/Manga'
import MangaTokenomics from './components/MangaTokenomics'
import TelegramBot from './components/TelegramBot'
import AIPoints from './components/AIPoints'
import Partners from './components/Partners'
import AIComunity from './components/AIComunity'
import StartGuide from './components/StartGuide'
import GetInvolved from './components/GetInvolved'
import MangaAI from './components/MangaAI'
import FirstMangaAI from './components/FirstMangaAI'
import Slider from './components/Slider'
import MangaAiSlider from './components/MangaAiSlider'
import WhyChooseSlider from './components/WhyChooseSlider'
import MangaMobiloe from './components/MangaMobiloe'
import BuyManga from './components/BuyManga'
import { useRef } from 'react'
import MangaNft from './components/MangaNft'
import MangaMainNft from './components/MangaNftMain'
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

export default function Home() {
  const nftRef = useRef(null)
  const nftMobileRef = useRef(null)
  const mangaRef = useRef(null)
  const mangaMobileRef = useRef(null)

  return (

    <main className={`main ${lato.className}`}>
      <div className='w-full relative z-10'>
        <Navbar nftRef={nftRef} nftMobileRef={nftMobileRef} mangaRef={mangaRef} mangaMobileRef={mangaMobileRef}/>
      </div>

      <FirstMangaAI />
      <BuyManga />
      <WhyChooseSlider />
      <WhyChoose />
      <div ref={nftMobileRef}>

        <MangaNft />
      </div>
      <div ref={nftRef}>

        <MangaMainNft />
      </div>
      <div ref={mangaRef}>

        <Manga />
      </div>
      <div ref={mangaMobileRef}>

        <MangaMobiloe />
      </div>

      <MangaTokenomics />

      <TelegramBot />

      <AIPoints />
      <MangaAiSlider />

      <Partners />

      <AIComunity />

      <StartGuide />

      <Slider />
      <GetInvolved />

      <MangaAI />
    </main>
  )
}
