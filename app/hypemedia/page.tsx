import Carousel from '@/components/Carousel1'
import Footer from '@/components/Footer'
import HypemediaHero from '@/components/HypemediaHero'
import Hypesubpage from '@/components/Hypesubpage'
import LogoCarousel from '@/components/LogoCarousel'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
     <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
        <Navbar />
        <HypemediaHero />
        <LogoCarousel />
        <Hypesubpage />
        <Carousel />
        <Footer />
   </div>
  )
}

export default page