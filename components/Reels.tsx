import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Reels = () => {
  return (
    <div className="flex w-full justify-center gap-4 mb-20">
        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-end overflow-hidden h-[600px] w-[520px] group  pt-6 relative bg-red-900">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/reel1.png"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover"
                />
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                    <Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE PROJECT <ArrowRight /></Button>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
            </div>

            <div className="flex flex-col">
                <p className="font-semibold text-xl">Verdant Metropolis Residence</p>
                <p className="text-sm">RESIDENTIAL / 2025</p>
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-end overflow-hidden h-[600px] w-[520px] group  pt-6 relative bg-red-900">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/reel2.png"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover"
                />
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE PROJECT <ArrowRight /></Button>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
            </div>

            <div className="flex flex-col">
                <p className="font-semibold text-xl">Verdant Metropolis Residence</p>
                <p className="text-sm">RESIDENTIAL / 2025</p>
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-end overflow-hidden h-[600px] w-[520px] group  pt-6 relative bg-red-900">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/reel3.png"
                    alt="reel one"
                    className="absolute inset-0 w-full h-full m-auto object-cover"
                />
                <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <Button className="border-[1px] border-slate-50 bg-transparent rounded-full hover:bg-slate-50 hover:text-slate-950">SEE PROJECT <ArrowRight /></Button>
                </div>
                <div className="absolute top-0 w-full h-full bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
            </div>

            <div className="flex flex-col">
                <p className="font-semibold text-xl">Verdant Metropolis Residence</p>
                <p className="text-sm">RESIDENTIAL / 2025</p>
            </div>
        </div>

    </div>
  )
}

export default Reels