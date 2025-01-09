import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

const CTA = () => {
  return (
    // <div className="w-[70%] flex flex-col justify-center items-center bg-slate-950 p-4 rounded-2xl self-center gap-10 h-[500px] mb-20 bg-gradient-to-b from-[#a9c0ff] to-[#222222]">
    //     <p className="text-6xl text-slate-50 font-semibold w-[60%] text-center">Lets build your next project together</p>
    //     <div className="flex gap-2">
    //         <Button className="bg-slate-50 h-[55px] w-[180px] text-slate-950 font-semibold text-base hover:bg-slate-50">Get started <ChevronRight /></Button>
    //         <Button className="bg-transparent border-[1px] border-slate-50 h-[55px] w-[220px] font-semibold text-base">Contact sales</Button>
    //     </div>
    // </div>
    <div className="w-[70%] relative overflow-hidden flex flex-col justify-center items-center bg-slate-950 p-4 rounded-2xl self-center gap-10 h-[500px] mb-20 bg-gradient-to-b from-[#a9c0ff] to-[#222222]">
      <div className="flex justify-center items-center absolute top-0 overflow-hidden h-full">
              <video autoPlay loop muted className="w-full">
                <source src="/assets/videos/homepage3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>

      <div className="z-30 flex flex-col justify-center items-center gap-6">
        <p className="text-6xl text-slate-50 font-semibold w-[76%] text-center">Turn Views into Results with Professional Videography</p>
        <div className="flex gap-2">
            <Button className="bg-slate-50 h-[55px] w-[180px] text-slate-950 font-semibold text-base hover:bg-slate-50">Get started <ChevronRight /></Button>
            <Button className="bg-transparent border-[1px] border-slate-50 h-[55px] w-[220px] font-semibold text-base">Contact sales</Button>
        </div>
      </div>

      <div className="absolute top-0 w-full h-full bg-[#0000006f] z-20"></div>
    </div>
  )
}

export default CTA