import React from 'react'
import '../styles/global.scss';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:-mt-44 w-full">
    <div className="flex flex-col justify-between overflow-hidden h-[340px] group service1  pt-6 relative">
            <div className="text-slate-50 font-extrabold text-2xl md:text-3xl lg:text-4xl mt-6 ml-6">
                <p>01</p>
                <p>PHOTOGRAPHY</p>
            </div>

            <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <p>Photogaphy</p>
                <div className="flex justify-center items-center h-[50px] w-[50px] rounded-xl border-[1px] border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-950 delay-200 transition-all"><ArrowUpRight /></div>
            </div>
            <div className="absolute top-0 w-full h-[340px] bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
        </div>

        <div className="flex flex-col justify-between overflow-hidden h-[340px] group service2  pt-6 relative">
            <div className="text-slate-50 font-extrabold text-2xl md:text-3xl lg:text-4xl mt-6 ml-6">
                <p>02</p>
                <p>VIDEOGRAPHY</p>
            </div>

            <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <p>Videography</p>
                <div className="flex justify-center items-center h-[50px] w-[50px] rounded-xl border-[1px] border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-950 delay-200 transition-all"><ArrowUpRight /></div>
            </div>
            <div className="absolute top-0 w-full h-[340px] bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
        </div>

        <div className="flex flex-col justify-between overflow-hidden h-[340px] group service3  pt-6 relative">
            <div className="text-slate-50 font-extrabold text-2xl md:text-3xl lg:text-4xl mt-6 ml-6">
                <p>03</p>
                <p>PREMIUM CONTENT CREATION</p>
            </div>

            <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <p>Premium content creation</p>
                <div className="flex justify-center items-center h-[50px] w-[50px] rounded-xl border-[1px] border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-950 delay-200 transition-all"><ArrowUpRight /></div>
            </div>
            <div className="absolute top-0 w-full h-[340px] bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
        </div>

        <div className="flex flex-col justify-between overflow-hidden h-[340px] group service4  pt-6 relative">
            <div className="text-slate-50 font-extrabold text-2xl md:text-3xl lg:text-4xl mt-6 ml-6">
                <p>04</p>
                <p>GRAPHIC DESIGN</p>
            </div>

            <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <p>Graphic design</p>
                <div className="flex justify-center items-center h-[50px] w-[50px] rounded-xl border-[1px] border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-950 delay-200 transition-all"><ArrowUpRight /></div>
            </div>
            <div className="absolute top-0 w-full h-[340px] bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
        </div>

        <div className="flex flex-col justify-between overflow-hidden h-[340px] group service5  pt-6 relative">
            <div className="text-slate-50 font-extrabold text-2xl md:text-3xl lg:text-4xl mt-6 ml-6">
                <p>05</p>
                <p>WEBSITE DESIGN & DEVELOPMENT</p>
            </div>

            <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <p>Website design & development</p>
                <div className="flex justify-center items-center h-[50px] w-[50px] rounded-xl border-[1px] border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-950 delay-200 transition-all"><ArrowUpRight /></div>
            </div>
            <div className="absolute top-0 w-full h-[340px] bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
        </div>

        <div className="flex flex-col justify-between overflow-hidden h-[340px] group service6  pt-6 relative">
            <div className="text-slate-50 font-extrabold text-2xl md:text-3xl lg:text-4xl mt-6 ml-6">
                <p>06</p>
                <p>SOCIAL MEDIA MANAGEMENT</p>
            </div>

            <div className="flex justify-end items-center gap-4 relative text-slate-50 font-bold mb-4 text-lg z-20 opacity-0 group-hover:opacity-100 delay-200 transition-opacity cursor-pointer mr-6">
                <p>Social media management</p>
                <div className="flex justify-center items-center h-[50px] w-[50px] rounded-xl border-[1px] border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-950 delay-200 transition-all"><ArrowUpRight /></div>
            </div>
            <div className="absolute top-0 w-full h-[340px] bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"></div>
        </div>

        {/* <div className="flex flex-col overflow-hidden h-[340px] group bg-white px-4 pt-6">
            <div className="text-slate-950 font-bold text-xl md:text-2xl lg:text-4xl mt-6">
                <p>02</p>
                <p className="font-extrabold">PHOTOGRAPHY</p>
                <p className="font-semibold text-base text-gray-800">Stephenson Media Production Inc.
Social Media Marketing Company
Based in Toronto, ON & Halton Region</p>
            </div>
        </div> */}
    </div>
  )
}

export default Services