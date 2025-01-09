import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const VerticalCarousel = () => {
  const images = [
    "assets/images/reel2.png",
    "assets/images/reel1.png",
    "assets/images/reel3.png",
  ];

  return (
    <div className="flex justify-center gap-6 px-36 pb-12 mt-12">

    <section className="flex flex-col gap-4 w-[50%] mt-12">
      <p className="text-7xl font-semibold w-[80%]">MAKE YOUR IMPACT FUND WORK HARDER</p>
      <p className="w-[70%] font-semibold mt-4">SEQL empowers corporations, brands,and organizations to impact social issues in youth sports by leveraging innovation and technology.</p>
      <Button className="w-[220px] h-[55px] text-base font-semibold">Get started <ChevronRight /></Button>
      <div className="flex flex-col  justify-start gap-2">
        <p className="font-semibold">POWERED BY</p>
        <Image
          width={100}
          height={100}
          src="/assets/images/logo4.png"
          alt="stephenson media logo"
        />
      </div>

    </section>

    <section className="relative h-[80vh] w-[45%] border-[1px] border-slate-950 rounded-lg overflow-hidden flex gap-2">
      {/* Scrolling content */}
      <div className="flex flex-col">
      <div className="flex flex-col gap-2 animate-scroll-up">
        {images.concat(images).map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 animate-scroll-up mt-6">
        {images.concat(images).map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      </div>

      <div className="flex flex-col">
      <div className="flex flex-col gap-2 animate-scroll-down">
        {images.concat(images).map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 animate-scroll-down mt-6">
        {images.concat(images).map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      </div>
    </section >
    </div>
  );
};

export default VerticalCarousel;
