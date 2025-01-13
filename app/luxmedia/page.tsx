import VerticalCarousel from '@/components/Carousel1'
import Footer from '@/components/Footer'
import LogoCarousel from '@/components/LogoCarousel'
import LuxmediaHero from '@/components/LuxmediaHero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
        <Navbar />
        <LuxmediaHero />
        <LogoCarousel />
        {/* <VerticalCarousel /> */}
        <Footer />
   </div>
  )
}

export default page