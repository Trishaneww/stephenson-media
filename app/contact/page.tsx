import Contacthero from '@/components/Contacthero'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA] pt-12">
        <Contacthero />
        <Footer />
        <Footer2 />
    </div>
  )
}

export default page