import Contacthero from '@/components/Contacthero'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'
import Image from 'next/image'
import React from 'react'
import '../../styles/global.scss'

const page = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA] pt-4">
        <Navbar />

        <div className="h-[60vh] flex flex-col justify-center items-center">
          <div className='z-20 -mt-64 font-semibold flex flex-col gap-2 justify-center items-center'>
    <p className="font-extrabold text-4xl md:text-6xl lg:text-7xl text-slate-50 text-center secondary">LETS GET STARTED</p>
          </div>    
    <div className="flex justify-center items-center absolute top-0 overflow-hidden h-[60vh] w-full">
<Image
  width={1000}
  height={1000}
  src="/assets/images/casestudy4.png"
  alt="black under armour logo" 
  className="absolute top-0 w-full h-full object-cover" 
/>
    </div>

    <       div className="h-[60vh] w-full bg-[#00000078] absolute top-0">

            </div>
          </div>
        <Contacthero />
        <Footer />
        <Footer2 />
        <Toaster />
    </div>
  )
}

export default page