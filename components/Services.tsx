import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import '../styles/global.scss';

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:-mt-44 w-full">
        <div className="flex flex-col overflow-hidden h-[340px] group service1 px-4 pt-6">
            <div className="text-slate-50 font-bold text-5xl mt-6">
                <p>01</p>
                <p>VIDEOGRAPHY</p>
            </div>
        </div>

        <div className="flex flex-col overflow-hidden h-[340px] group service3 px-4 pt-6">
            <div className="text-slate-50 font-bold text-5xl mt-6">
                <p>02</p>
                <p>VIDEOGRAPHY</p>
            </div>
        </div>

        <div className="flex flex-col overflow-hidden h-[340px] group service2 px-4 pt-6">
            <div className="text-slate-50 font-bold text-5xl mt-6">
                <p>03</p>
                <p>VIDEOGRAPHY</p>
            </div>
        </div>

        <div className="flex flex-col overflow-hidden h-[340px] group service1 px-4 pt-6">
            <div className="text-slate-50 font-bold text-5xl mt-6">
                <p>04</p>
                <p>VIDEOGRAPHY</p>
            </div>
        </div>

        <div className="flex flex-col overflow-hidden h-[340px] group service2 px-4 pt-6">
            <div className="text-slate-50 font-bold text-5xl mt-6">
                <p>05</p>
                <p>VIDEOGRAPHY</p>
            </div>
        </div>

        <div className="flex flex-col overflow-hidden h-[340px] group service3 px-4 pt-6">
            <div className="text-slate-50 font-bold text-5xl mt-6">
                <p>06</p>
                <p>VIDEOGRAPHY</p>
            </div>
        </div>
    </div>
  )
}

export default Services