"use client"
import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react';
import { Button } from './ui/button'

const Gallery = () => {
  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
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
    <div className="flex flex-col items-center justify-center gap-12 text-slate-950 py-12 lg:py-20 mb-24 px-4 mt-2 relative w-full">
    {/* <p className="text-3xl md:text-3xl lg:text-5xl font-bold text-center">Kick off workflows on any GitHub event to automate tasks</p> */}
    <section className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-5 w-full">
       <div className="hidden lg:flex flex-col items-center relative h-[730px] w-full top-8 hover:top-0 duration-200 ease-in-out transition-all">
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

       <div className="flex flex-col items-center relative h-[730px] w-full top-12 hover:top-0 duration-200 ease-in-out transition-all">
          <video
            ref={videoRefs[1]}
            width={400}
            height={1000}
            src="/assets/videos/homepage3.mp4" // Replace with your video file path
            muted
            className="absolute object-cover w-full h-full z-0"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
          Your browser does not support the video tag.
          </video>
       </div>

       <div className="flex flex-col items-center relative h-[730px] w-full top-16 hover:top-0 duration-200 ease-in-out transition-all">
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

       <div className="flex flex-col items-center relative h-[730px] w-full top-12 hover:top-0 duration-200 ease-in-out transition-all">
          <video
            ref={videoRefs[3]}
            width={400}
            height={1000}
            src="/assets/videos/homepage2.mp4" // Replace with your video file path
            muted
            className="absolute object-cover w-full h-full z-0"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
          Your browser does not support the video tag.
          </video>
       </div>

       <div className="hidden lg:flex flex-col items-center relative h-[730px] w-full top-8 hover:top-0 duration-200 ease-in-out transition-all">
          <video
            ref={videoRefs[4]}
            width={400}
            height={1000}
            src="/assets/videos/homepage1.mp4" // Replace with your video file path
            muted
            className="absolute object-cover w-full h-full z-0"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
          Your browser does not support the video tag.
          </video>
       </div>

       
   </section>
   <p className="text-[6.2rem] font-extrabold absolute top-96 text-slate-50">PREMIUM VIDEOGRAPHY.</p>
</div>
  )
}

export default Gallery