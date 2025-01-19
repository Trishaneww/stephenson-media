"use client"
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Navbar2 from '@/components/Navbar2'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react';




const casestudy1 = () => {
    const images = [
        "/assets/images/casestudy.png",
        "/assets/images/casestudy2.png",
        "/assets/images/casestudy.png",
        "/assets/images/casestudy2.png",
        "/assets/images/casestudy.png",
        "/assets/images/casestudy2.png",
        "/assets/images/casestudy.png",
        "/assets/images/casestudy2.png",
        "/assets/images/casestudy.png",
      ];

      const videoRefs = [
          useRef<HTMLVideoElement | null>(null),
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
    <div className="flex flex-col items-center scroll-smooth bg-[#FAFAFA]">
        <Navbar2 />

        {/* <div className="flex justify-start w-full py-4 px-4">
            <Link href="/">
                <Image 
                width={100}
                height={100}
                src="/assets/images/logo4.png"
                alt="stephenson media logo"
                />
            </Link>
        </div> */}


        <section className="flex flex-col w-full px-6 lg:px-48 mb-20 mt-36 gap-2 justify-center items-center">
            <div className="flex gap-2 items-center justify-center">
                <Image
                    width={50}
                    height={50}
                    src="/assets/images/blackunderarmour.png"
                    alt="black under armour logo" 
                />
                <p className="text-xl font-semibold">UNDER ARMOUR</p>
            </div>
            <p className="font-bold text-4xl md:text-6xl lg:text-7xl text-slate-950 text-center">Driving Soccer Engagement Among Latino and African American Youth: adidas' Added Value at Tournaments</p>

            <section className="flex flex-col lg:flex-row gap-6 mt-8">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/casestudy3.png"
                    alt="black under armour logo" 
                    className="rounded-xl"
                />

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col bg-white border-[1px] border-gray-200 px-4 w-full h-[200px] rounded-xl items-start justify-center gap-2">
                        <p className="font-semibold text-lg">13+ Markets Nationwide</p>
                        <p>Fastbreak and Adidas partnered in over 13 markets across the U.S. to provide showcase opportunities for athletes.</p>
                    </div>

                    <div className="flex flex-col bg-white border-[1px] border-gray-200 px-4 w-full h-[200px] rounded-xl items-start justify-center gap-2">
                        <p className="font-semibold text-lg">13+ Markets Nationwide</p>
                        <p>Fastbreak and Adidas partnered in over 13 markets across the U.S. to provide showcase opportunities for athletes.</p>
                    </div>

                    <div className="flex flex-col bg-white border-[1px] border-gray-200 px-4 w-full h-[200px] rounded-xl items-start justify-center gap-2">
                        <p className="font-semibold text-lg">13+ Markets Nationwide</p>
                        <p>Fastbreak and Adidas partnered in over 13 markets across the U.S. to provide showcase opportunities for athletes.</p>
                    </div>
                </div>
            </section>
        </section>

        <div className="flex flex-col lg:w-[75%] gap-4 px-6 mb-36 mt-2">
            <p className="font-semibold text-2xl lg:text-4xl secondary">OBJECTIVE</p>
            <p className="">Our approach to social media ensures your brand stays relevant and on-trend in an ever-evolving digital landscape. While it's easier than ever to go viral, cutting through the noise and building a genuinely engaged audience is more challenging than ever. By keeping up with the latest trends and platform updates, we help your business maintain a competitive edge and engage effectively with your followers.</p>
            <p className="font-semibold text-2xl lg:text-4xl secondary mt-6">CHALLENGES</p>
            <p className="">Our approach to social media ensures your brand stays relevant and on-trend in an ever-evolving digital landscape. While it's easier than ever to go viral, cutting through the noise and building a genuinely engaged audience is more challenging than ever. By keeping up with the latest trends and platform updates, we help your business maintain a competitive edge and engage effectively with your followers.</p>
        </div>





    <section className="flex gap-6 mb-36">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <video
            controls
            width={300}
            height={300}
            src="/assets/videos/reel.mp4" // Replace with your video file path
            muted
            className="relative z-10 group-hover:top-0 duration-200 ease-iniout transition-all rounded-lg"
          >
          Your browser does not support the video tag.
          </video>
      
          <video
            controls
            width={300}
            height={300}
            src="/assets/videos/reel.mp4" // Replace with your video file path
            muted
            className="relative z-0 group-hover:top-0 duration-200 ease-iniout transition-all rounded-lg"
          >
          Your browser does not support the video tag.
          </video>
          <video
            controls
            width={300}
            height={300}
            src="/assets/videos/reel.mp4" // Replace with your video file path
            muted
            className="relative z-0 group-hover:top-0 duration-200 ease-iniout transition-all rounded-lg"
          >
          Your browser does not support the video tag.
          </video>
          <video
            controls
            width={300}
            height={300}
            src="/assets/videos/reel.mp4" // Replace with your video file path
            muted
            className="relative z-0 group-hover:top-0 duration-200 ease-iniout transition-all rounded-lg"
          >
          Your browser does not support the video tag.
          </video>
        </div>
    </section>

    <section className="w-full flex flex-col lg:flex-row justify-center bg-[#222222] text-slate-50 gap-12 lg:gap-6 py-20 px-12 mb-20">
            <div className="flex flex-col gap-2 lg:w-[25%]">
                <p className="text-4xl font-semibold">The Ask</p>
                <p className="text-base">Stalwart Montreal-based Levitts, a deli meat producer, came to us to help brand and market a new line of halal deli products, Assala Halal. With many Muslims on their team, they knew there was a market — but they didn’t know how to reach it.</p>
            </div>

            <div className="flex flex-col gap-2 lg:w-[25%]">
                <p className="text-4xl font-semibold">The Ask</p>
                <p className="text-base">Stalwart Montreal-based Levitts, a deli meat producer, came to us to help brand and market a new line of halal deli products, Assala Halal. With many Muslims on their team, they knew there was a market — but they didn’t know how to reach it.</p>
            </div>

            <div className="flex flex-col gap-2 lg:w-[25%]">
                <p className="text-4xl font-semibold">The Ask</p>
                <p className="text-base">Stalwart Montreal-based Levitts, a deli meat producer, came to us to help brand and market a new line of halal deli products, Assala Halal. With many Muslims on their team, they knew there was a market — but they didn’t know how to reach it.</p>
            </div>
        </section>


    <section className="lg:w-[75%] border-[1px] border-gray-200 rounded-lg overflow-hidden flex flex-col gap-2">
            {/* Scrolling content */}
            <div className="flex">
                <div className="flex gap-2 animate-scroll-right">
                {images.concat(images).map((src, index) => (
                    <div key={index} className="flex-shrink-0">
                    <Image
                        width={300}
                        height={300}
                        src={src}
                        alt={`Carousel ${index + 1}`}
                        className="rounded-lg"
                    />
                    </div>
                ))}
                </div>
            </div>

            {/* <div className="flex">
                <div className="flex gap-2 animate-scroll-left">
                {images.concat(images).map((src, index) => (
                    <div key={index} className="flex-shrink-0">
                    <Image
                        width={200}
                        height={200}
                        src={src}
                        alt={`Carousel ${index + 1}`}
                        className="rounded-lg"
                    />
                    </div>
                ))}
                </div>
            </div> */}
    
            {/* <div className="flex">
            <div className="flex gap-2 animate-scroll-right">
              {images.concat(images).map((src, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    width={500}
                    height={500}
                    src={src}
                    alt={`Carousel ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="flex  gap-2 animate-scroll-right">
              {images.concat(images).map((src, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    width={500}
                    height={500}
                    src={src}
                    alt={`Carousel ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            </div> */}
          </section >


          <section className="flex flex-col items-center gap-6  mt-32 mb-20">
            <p className="font-semibold text-4xl">NEXT CASE STUDY</p>

            <div className="relative w-[300px] h-[65px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10">
                <div className="absolute top-0 h-full w-full group-hover:ml-56 duration-700 transition-all ease-in-out bg-white border-[1px] border-gray-200 rounded-lg z-20 flex justify-center items-center font-semibold">JR NBA CAMP</div>
                <Link href="/" className="absolute top-0 h-full w-full bg-slate-950 rounded-lg text-slate-50 flex justify-start items-center pl-12 font-semibold">VIEW NOW</Link>

            </div>
          </section>


        <Footer />
        <Footer2 />

    </div>
  )
}

export default casestudy1