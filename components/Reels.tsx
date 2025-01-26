"use client"
import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react';
import { Button } from './ui/button'
import '../styles/global.scss'

const Reels = () => {
  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
  ];

  const handleMouseEnter = (index: number) => {
    const video = videoRefs[index].current;
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs[index].current;
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset the video to the start
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-slate-950 py-12 lg:py-20 px-4 -mt-20">
    <section className="flex flex-col gap-4 mt-6 w-[66%] ">
        <p className="text-base font-semibold">SHOWCASE YOUR TEAMS & SKILLS</p>
        <p className="text-3xl lg:text-5xl xl:text-7xl font-extrabold secondary">VIDEOGRAPHY</p>
        <p className="lg:text-lg mt-4">Capture the action with cinematic precision. Our videography services create high-energy highlight reels, event coverage, and promotional videos that showcase your athletes and brand like never before.</p>
      </section>
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12 w-[66%]">
        <div className="flex flex-col items-center group">
          <video
            ref={videoRefs[1]}
            width={310}
            height={310}
            src="/assets/videos/reel.mp4" // Replace with your video file path
            muted
            className="relative top-16 z-0 group-hover:top-0 duration-200 ease-iniout transition-all rounded-2xl"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
          Your browser does not support the video tag.
          </video>
         <div className="flex flex-col items-start justify-start w-full lg:w-[380px] bg-white border-[1px] border-gray-200 px-4 rounded-xl h-[200px] hover:delay-300 pt-8 gap-2 z-10">
           <p className="text-gray-600 text-xl lg:text-2xl font-bold mt-2">Over 10M+ OOH Impressions</p>
           <p className="text-slate-900">Our primary offering is a comprehensive educational program that teaches clients</p>
           {/* <div className="flex justify-center items-center text-gray-600 font-bold mt-4"><p className="text-lg lg:text-base cursor-pointer">See more</p> <ChevronRight size={20}/></div>  */}
        </div>
       </div>

       <div className="flex flex-col items-center group">
          <video
            ref={videoRefs[2]}
            width={310}
            height={310}
            src="/assets/videos/reel.mp4" // Replace with your video file path
            muted
            className="relative top-16 z-0 group-hover:top-0 duration-200 ease-iniout transition-all rounded-2xl"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
          Your browser does not support the video tag.
          </video>
         <div className="flex flex-col items-start justify-start w-full lg:w-[380px] bg-white border-[1px] border-gray-200 px-4 rounded-xl h-[200px] hover:delay-300 pt-8 gap-2 z-10">
           <p className="text-gray-600 text-xl lg:text-2xl font-bold mt-2">Over 10M+ OOH Impressions</p>
           <p className="text-slate-900">Our primary offering is a comprehensive educational program that teaches clients</p>
           {/* <div className="flex justify-center items-center text-gray-600 font-bold mt-4"><p className="text-lg lg:text-base cursor-pointer">See more</p> <ChevronRight size={20}/></div>  */}
        </div>
       </div>

       <div className="flex flex-col items-center group">
          <video
            ref={videoRefs[0]}
            width={310}
            height={310}
            src="/assets/videos/reel.mp4" // Replace with your video file path
            muted
            className="relative top-16 z-0 group-hover:top-0 duration-200 ease-iniout transition-all rounded-2xl"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
          Your browser does not support the video tag.
          </video>
         <div className="flex flex-col items-start justify-start w-full lg:w-[380px] bg-white border-[1px] border-gray-200 px-4 rounded-xl h-[200px] hover:delay-300 pt-8 gap-2 z-10">
           <p className="text-gray-600 text-xl lg:text-2xl font-bold mt-2">Over 10M+ OOH Impressions</p>
           <p className="text-slate-900">Our primary offering is a comprehensive educational program that teaches clients</p>
           {/* <div className="flex justify-center items-center text-gray-600 font-bold mt-4"><p className="text-lg lg:text-base cursor-pointer">See more</p> <ChevronRight size={20}/></div>  */}
        </div>
       </div>
   </section>
</div>
  )
}

export default Reels