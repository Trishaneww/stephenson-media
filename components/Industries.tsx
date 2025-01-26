"use client"
import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react';
import { Button } from './ui/button'
import '../styles/global.scss';
import Link from 'next/link';

const Industries = () => {
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
    <div className="flex flex-col items-center justify-center gap-12 text-slate-950 py-12 lg:-mt-12 px-4 mt-2 relative w-full">
         <section className="flex flex-col gap-4 mt-6 w-[70%]">
        <p className="text-3xl lg:text-5xl xl:text-7xl font-extrabold secondary">Tailored Visual Marketing for Your Industry</p>
        <p className="lg:text-lg mt-4">Capture the action with cinematic precision. Our videography services create high-energy highlight reels, event coverage, and promotional videos that showcase your athletes and brand like never before.</p>
      </section>

    <section className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center w-[70%]">
    <div className="flex flex-col items-center relative h-[530px] w-full group bg-slate-50 border-[1px] border-gray-200">
        <div className="relative w-full h-[750px] group-hover:h-[900px] duration-200 ease-in-out transition-all overflow-hidden z-20">
          <video
            ref={videoRefs[0]}
            width={400}
            height={1000}
            src="/assets/videos/homepage2.mp4" // Replace with your video file path
            muted
            className="absolute object-cover w-full h-full z-0"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
          Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute top-0 h-1/2 w-full group-hover:mt-56 duration-700 transition-all ease-in-out bg-black z-10 flex justify-center items-center font-semibold"></div>
        <div className="flex flex-col gap-2 h-full w-full p-4 group-hover:text-slate-50 group-hover:bg-black duration-300 ease-in-out">
            <p className="secondary text-xl font-bold z-30">HYPE SPORTS MEDIA</p>
            <ul className="flex flex-col z-30">
                <li>Content Creation</li>
                <li>Graphic Design</li>
                <li>Videography</li>
                <li>Photography</li>
            </ul>
        </div>
       </div>

       <div className="flex flex-col items-center relative h-[530px] w-full group bg-slate-50 border-[1px] border-gray-200">
        <div className="relative w-full h-[750px] group-hover:h-[900px] duration-200 ease-in-out transition-all overflow-hidden z-20">
          <video
            ref={videoRefs[1]}
            width={400}
            height={1000}
            src="/assets/videos/homepage1.mp4" // Replace with your video file path
            muted
            className="absolute object-cover w-full h-full z-0"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
          Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute top-0 h-1/2 w-full group-hover:mt-56 duration-700 transition-all ease-in-out bg-black z-10 flex justify-center items-center font-semibold"></div>
        <div className="flex flex-col gap-2 h-full w-full p-4 group-hover:text-slate-50 group-hover:bg-black duration-300 ease-in-out">
            <p className="secondary text-xl font-bold z-30">HYPE SPORTS MEDIA</p>
            <ul className="flex flex-col z-30">
                <li>Content Creation</li>
                <li>Graphic Design</li>
                <li>Videography</li>
                <li>Photography</li>
            </ul>
        </div>
       </div>

       <div className="flex flex-col items-center relative h-[530px] w-full group bg-slate-50 border-[1px] border-gray-200">
        <div className="relative w-full h-[750px] group-hover:h-[900px] duration-200 ease-in-out transition-all overflow-hidden z-20">
          <video
            ref={videoRefs[2]}
            width={400}
            height={1000}
            src="/assets/videos/homepage3.mp4" // Replace with your video file path
            muted
            className="absolute object-cover w-full h-full z-0"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
          Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute top-0 h-1/2 w-full group-hover:mt-56 duration-700 transition-all ease-in-out bg-black z-10 flex justify-center items-center font-semibold"></div>
        <div className="flex flex-col gap-2 h-full w-full p-4 group-hover:text-slate-50 group-hover:bg-black duration-300 ease-in-out">
            <p className="secondary text-xl font-bold z-30">HYPE SPORTS MEDIA</p>
            <ul className="flex flex-col z-30">
                <li>Content Creation</li>
                <li>Graphic Design</li>
                <li>Videography</li>
                <li>Photography</li>
            </ul>
        </div>
       </div>
   </section>
</div>
  )
}

export default Industries