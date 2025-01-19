import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, ChevronRight, Instagram } from 'lucide-react'
import Link from 'next/link'

const Hypesubpage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 lg:px-12 pb-28">
        <section className="flex flex-col justify-center items-center gap-4 lg:w-[70%] mt-12 text-center">
            <p className="text-3xl md:text-5xl lg:text-6xl font-semibold lg:w-[75%]">YOU'RE THE BEST SO LET'S SHOW IT</p>
            <p className="lg:w-[60%] text-lg font-semibold mt-4">HYPE Sports Media is Stephenson Media's sport branch that's dedicated to making fire unique content that showcases athletes, teams and clubs to the fullest! From sick athlete training videos to full custom media packages for whole clubs- we have all your premium sports media needs covered!</p>
            {/* <Button className="w-[220px] h-[55px] text-base font-semibold text-slate-950 bg-slate-50">Get started <ChevronRight /></Button> */}
            {/* <div className="flex flex-col gap-2">
            <p className="font-semibold">POWERED BY</p>
            <Image
                width={100}
                height={100}
                src="/assets/images/logo4.png"
                alt="stephenson media logo"
                className="ml-2"
            />
            </div> */}
        </section>

        <section className="grid gap-4 grid-cols-1 xl:grid-cols-3 place-items-center place-content-center">

        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-end overflow-hidden w-[310px] h-[500px] lg:w-[380px] group  pt-6 relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/michigan.jpg"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover group-hover:scale-110 duration-500 transition-transform"
                />

                <div className="flex flex-col justify-start items-start h-full w-full pl-6 gap-4 relative text-slate-50 font-normal mb-4 pt-10 text-lg z-20">
                  <div className="flex gap-4">
                    <Image
                      width={50}
                      height={50}
                      src="/assets/images/underarmour.png"
                      alt="reel one"
                    />
                    <p className="font-semibold text-xl md:text-3xl">UNDER ARMOUR</p>
                  </div>
                  <ul className="flex flex-col">
                    <li>Videography</li>
                    <li>Photography</li>
                    <li>Graphic Design</li>
                    <li>Content Creation</li>
                  </ul>
                </div>
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <Link href="/casestudy1"><Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE CASE STUDY <ArrowRight /></Button></Link>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] backdrop-blur-[1px] z-0 opacity-90"></div>
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-end overflow-hidden w-[310px] h-[500px] lg:w-[380px] group  pt-6 relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/michigan.jpg"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover group-hover:scale-110 duration-500 transition-transform"
                />

                <div className="flex flex-col justify-start items-start h-full w-full pl-6 gap-4 relative text-slate-50 font-normal mb-4 pt-10 text-lg z-20">
                  <div className="flex gap-4">
                    <Image
                      width={50}
                      height={50}
                      src="/assets/images/underarmour.png"
                      alt="reel one"
                    />
                    <p className="font-semibold text-xl md:text-3xl">UNDER ARMOUR</p>
                  </div>
                  <ul className="flex flex-col">
                    <li>Videography</li>
                    <li>Photography</li>
                    <li>Graphic Design</li>
                    <li>Content Creation</li>
                  </ul>
                </div>
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                  <Link href="/casestudy1"><Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE CASE STUDY <ArrowRight /></Button></Link>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] backdrop-blur-[1px] z-0 opacity-90"></div>
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-end overflow-hidden w-[310px] h-[500px] lg:w-[380px] group pt-6 relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/michigan.jpg"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover group-hover:scale-110 duration-500 transition-transform"
                />

                <div className="flex flex-col justify-start items-start h-full w-full pl-6 gap-4 relative text-slate-50 font-normal mb-4 pt-10 text-lg z-20">
                  <div className="flex gap-4">
                    <Image
                      width={50}
                      height={50}
                      src="/assets/images/underarmour.png"
                      alt="reel one"
                    />
                    <p className="font-semibold text-xl md:text-3xl">UNDER ARMOUR</p>
                  </div>
                  <ul className="flex flex-col">
                    <li>Videography</li>
                    <li>Photography</li>
                    <li>Graphic Design</li>
                    <li>Content Creation</li>
                  </ul>
                </div>
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <Link href="/casestudy1"><Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE CASE STUDY <ArrowRight /></Button></Link>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] backdrop-blur-[1px] z-0 opacity-90"></div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hypesubpage