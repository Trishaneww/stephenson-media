import Image from 'next/image'
import React from 'react'
import Reels from './Reels'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 xl:px-12 pb-28 pt-20 bg-[#222222] text-slate-50" >
      <section className="flex flex-col justify-center items-center gap-4 lg:w-[70%] mt-12 text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold w-[95%]">YOU'RE THE BEST SO LET'S SHOW IT</p>
          <p className="w-[90%] lg:w-[70%] lg:text-lg font-semibold mt-4">HYPE Sports Media is Stephenson Media's sport branch that's dedicated to making fire unique content that showcases athletes, teams and clubs to the fullest! From sick athlete training videos to full custom media packages for whole clubs- we have all your premium sports media needs covered!</p>
          <p className="w-[90%] lg:w-[70%] lg:text-lg font-semibold mt-4">HYPE Sports Media is Stephenson Media's sport branch that's dedicated to making fire unique content that showcases athletes, teams and clubs to the fullest! From sick athlete training videos to full custom media packages for whole clubs- we have all your premium sports media needs covered!</p>
                {/* <Button className="w-[220px] h-[55px] text-base font-semibold text-slate-950 bg-slate-50">Get started <ChevronRight /></Button> */}
          <div className="flex flex-col gap-2">
          </div>
      </section>

      <section className="grid gap-4 grid-cols-1 xl:grid-cols-3">
        <div className="flex flex-col gap-2 lg:w-[400px]">
            <div className="flex flex-col justify-end overflow-hidden h-[300px] w-[80%] min-w-[300px] max-w-[400px] lg:h-[460px] lg:w-[380px] group pt-6 relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/reel2.png"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover"
                />
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE PORTFOLIO <ArrowRight /></Button>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
            </div>
        </div>

        <div className="flex flex-col gap-2 lg:w-[400px]">
            <div className="flex flex-col justify-end overflow-hidden h-[300px] w-[80%] min-w-[300px] max-w-[400px] lg:h-[460px] lg:w-[380px] group pt-6 relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/reel2.png"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover"
                />
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE PORTFOLIO <ArrowRight /></Button>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
            </div>
        </div>

        <div className="flex flex-col gap-2 lg:w-[400px]">
            <div className="flex flex-col justify-end overflow-hidden h-[300px] w-[80%] min-w-[300px] max-w-[400px] lg:h-[460px] lg:w-[380px] group pt-6 relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/reel2.png"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover"
                />
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE PORTFOLIO <ArrowRight /></Button>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
            </div>
        </div>
      </section>
      {/* <Reels /> */}
    </div>
  )
}

export default Body