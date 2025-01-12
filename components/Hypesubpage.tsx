import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ChevronRight, Instagram } from 'lucide-react'

const Hypesubpage = () => {
  return (
    <div className="flex justify-center gap-6 px-36 pb-28">
        <section className="flex flex-col justify-center items-center gap-4 w-[70%] mt-12 text-center">
            <p className="text-8xl font-semibold w-[95%]">YOU'RE THE BEST SO LET'S SHOW IT</p>
            <p className="w-[70%] text-lg font-semibold mt-4">HYPE Sports Media is Stephenson Media's sport branch that's dedicated to making fire unique content that showcases athletes, teams and clubs to the fullest! From sick athlete training videos to full custom media packages for whole clubs- we have all your premium sports media needs covered!</p>
            {/* <Button className="w-[220px] h-[55px] text-base font-semibold text-slate-950 bg-slate-50">Get started <ChevronRight /></Button> */}
            <div className="flex flex-col gap-2">
            <p className="font-semibold">POWERED BY</p>
            <Image
                width={100}
                height={100}
                src="/assets/images/logo4.png"
                alt="stephenson media logo"
                className="ml-2"
            />
            </div>
        </section>
    </div>
  )
}

export default Hypesubpage