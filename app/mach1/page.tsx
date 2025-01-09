import VerticalCarousel from '@/components/Carousel1'
import Footer from '@/components/Footer'
import LogoCarousel from '@/components/LogoCarousel'
import MachHero from '@/components/MachHero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
    <Navbar />
    <MachHero />
    <LogoCarousel />
    <VerticalCarousel />
    <Footer />
</div>
  )
}

export default page