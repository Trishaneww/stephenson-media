import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Calculator, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Footer3 = () => {
  return (
    <div className="w-full relative flex items-center justify-center py-40 px-6">
        <div className="flex flex-col items-center justify-center gap-2 z-10 text-slate-50 text-center">
          <p className="font-extrabold text-2xl lg:text-6xl secondary">LETS GET CREATIVE</p>
          <div className="flex flex-col lg:flex-row gap-2 mt-4">
            <Button className="h-[55px] w-[220px] lg:w-[180px] bg-slate-50 hover:bg-slate-50 text-slate-950 font-semibold text-base">Get started <ChevronRight /></Button>
            <Button className="bg-transparent border-[1px] border-slate-50  h-[55px] w-[220px] text-slate-50 font-semibold text-base">Contact sales</Button>
        </div>
        
        </div>
          <Image
          src="/assets/images/casestudy3.png"
          width={1000}
          height={1000}
          alt="a2g construction logo"
          className="absolute top-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full object-cover bg-black opacity-50"></div>
    </div>
  )
}

export default Footer3