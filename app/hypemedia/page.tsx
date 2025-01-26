import Carousel from '@/components/Carousel1'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Gallery2 from '@/components/Gallery2'
import HypemediaHero from '@/components/HypemediaHero'
import Hypesubpage from '@/components/Hypesubpage'
import LogoCarousel from '@/components/LogoCarousel'
import Navbar from '@/components/Navbar'
import Reels from '@/components/Reels'
import Stats from '@/components/Stats'
import Stats2 from '@/components/stats2'
import React from 'react'

const page = () => {
  return (
     <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
        <Navbar />
        <HypemediaHero />
        <div className="-mt-44">
          <LogoCarousel />
        </div>
        <Hypesubpage />
        <Stats2 />
        <Reels />
        <Carousel />
        <Gallery2 />
        <div className="py-6 px-6 flex justify-center items-center">
          <ContactForm />
        </div>
        <Footer />
   </div>
  )
}

export default page