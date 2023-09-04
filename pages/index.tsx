import Image from 'next/image'
import { Lato } from 'next/font/google'
import Head from 'next/head'
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


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

export default function Home() {
  return (

    <main className={`main ${lato.className}`}>
      <div className='w-full relative z-10'>
        <Navbar />
      </div>

      <FirstMangaAI />
      <WhyChooseSlider />
      <WhyChoose />


      <Manga />
      <MangaMobiloe />

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
