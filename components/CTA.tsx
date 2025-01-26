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
    // 
    <div className="w-[90%] lg:w-[70%] relative overflow-hidden flex flex-col justify-center items-center p-4 rounded-2xl self-center gap-10 h-[500px] mb-20 bg-white border-[1px] border-gray-300 lg:-mt-12">
      <div className="z-30 flex flex-col justify-center items-center gap-6">
        <p className="text-3xl md:text-4xl lg:text-6xl text-slate-950 font-semibold w-[76%] text-center">Turn views into results with professional videography</p>
        <div className="flex flex-col lg:flex-row gap-2">
            <Button className="bg-slate-950 h-[55px] w-[220px] lg:w-[180px] text-slate-50 font-semibold text-base">Get started <ChevronRight /></Button>
            <Button className="bg-transparent border-[1px] border-slate-950 hover:bg-slate-50 h-[55px] w-[220px] text-slate-950 font-semibold text-base">Contact sales</Button>
        </div>
      </div>
    </div>
  )
}

export default CTA