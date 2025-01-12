// pages/index.tsx
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Preloader from '../components/Preloader';
import { Button } from './ui/button';
import Link from 'next/link';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-[94vh]">
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="homepage"
        >
          {/* Add your other homepage sections here */}
          <div className="flex justify-center items-center absolute top-0 overflow-hidden h-[94vh]">
              <video autoPlay loop muted className="w-full">
                <source src="/assets/videos/homepage1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>

          {/* <div className="flex flex-col absolute top-[70%] left-[10%] z-20 items-center justify-center w-[300px] gap-2">
            <p className="text-2xl font-bold text-slate-50 tracking wide">HYPE MEDIA.</p>
            <p className="text-sm w-[90%] text-center text-slate-50">Follow the journey of NFL prospects as they achieve their lifelong dream of getting Drafted</p>
            <Button className="border-[1px] border-slate-50 bg-transparent rounded-full w-[130px] h-[35px] font-bold text-base tracking-wide hover:bg-slate-400">See more</Button>
          </div> */}


          <section className="flex gap-28 justify-center absolute top-[70%] w-full">
          <div className="flex flex-col z-10 items-center justify-center w-[300px] gap-2">
            <p className="text-2xl font-bold text-slate-50 tracking wide">HYPE SPORTS</p>
            <p className="text-sm w-[90%] text-center text-slate-50">Follow the journey of NFL prospects as they achieve their lifelong dream of getting Drafted</p>
            <Link href="/hypemedia">
            <Button className="border-[1px] border-slate-50 bg-transparent rounded-full w-[130px] h-[35px] font-bold text-base tracking-wide hover:bg-slate-950">See more</Button>
            </Link>
          </div>

          <div className="flex flex-col z-20 items-center justify-center w-[300px] gap-2">
            <p className="text-2xl font-bold text-slate-50 tracking wide">LUXE PREMIUM</p>
            <p className="text-sm w-[90%] text-center text-slate-50">Follow the journey of NFL prospects as they achieve their lifelong dream of getting Drafted</p>
            <Link href="/luxmedia">
            <Button className="border-[1px] border-slate-50 bg-transparent rounded-full w-[130px] h-[35px] font-bold text-base tracking-wide hover:bg-slate-950">See more</Button>
            </Link>
          </div>

          <div className="flex flex-col z-20 items-center justify-center w-[300px] gap-2">
            <p className="text-2xl font-bold text-slate-50 tracking wide">MACH 2 AUTO</p>
            <p className="text-sm w-[90%] text-center text-slate-50">Follow the journey of NFL prospects as they achieve their lifelong dream of getting Drafted</p>
            <Link href="/mach1">
            <Button className="border-[1px] border-slate-50 bg-transparent rounded-full w-[130px] h-[35px] font-bold text-base tracking-wide hover:bg-slate-950">See more</Button>
            </Link>
          </div>

          </section>

          <div className="h-[94vh] w-full bg-[#00000078] absolute top-0">

          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
