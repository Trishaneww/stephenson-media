import Contacthero from '@/components/Contacthero'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA] pt-4">
        <Contacthero />
        <Footer />
        <Footer2 />
        <Toaster />
    </div>
  )
}

export default page