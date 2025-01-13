import React from "react";
import Image from "next/image";

const VerticalCarousel = () => {
  const images = [
    "/assets/images/reel2.png",
    "/assets/images/reel1.png",
    "/assets/images/reel4.png",
  ];

  return (
    <div className="flex flex-col gap-2 bg-[#222222] text-slate-50">
      <div className="flex justify-center gap-6 px-36 pb-12 mt-12">

      <section className="flex flex-col gap-4 w-[55%] mt-12">
        <p className="text-lg font-semibold">SHOWCASE YOUR TEAMS & SKILLS</p>
        <p className="text-7xl font-semibold w-[80%]">VIDEOGRAPHY</p>
        <p className="w-[70%] font-semibold mt-4">Capture the action with cinematic precision. Our videography services create high-energy highlight reels, event coverage, and promotional videos that showcase your athletes and brand like never before.</p>
      </section>

      <section className="relative h-[50vh] w-[40%] border-[1px] border-slate-950 rounded-lg overflow-hidden flex gap-2">
        {/* Scrolling content */}
        <div className="flex flex-col">
        <div className="flex flex-col gap-2 animate-scroll-up">
          {images.concat(images).map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                width={1000}
                height={1000}
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
              <Image
                width={1000}
                height={1000}
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
              <Image
                width={1000}
                height={1000}
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
              <Image
                width={1000}
                height={1000}
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

      <div className="flex justify-center gap-6 px-36 pb-12 mt-12">
        <section className="flex flex-col gap-4 w-[55%] mt-12">
          <p className="text-lg font-semibold">MULTI-USE STUNNING VISUALS</p>
          <p className="text-7xl font-semibold w-[80%]">PHOTOGRAPHY</p>
          <p className="w-[70%] font-semibold mt-4">Freeze the moment in time with professional sports photography. From action shots to team portraits, we deliver stunning visuals that highlight every victory and milestone.</p>
        </section>

        <section className="relative h-[50vh] w-[40%] border-[1px] border-slate-950 rounded-lg overflow-hidden flex gap-2">
          {/* Scrolling content */}
          <div className="flex flex-col">
          <div className="flex flex-col gap-2 animate-scroll-up">
            {images.concat(images).map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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

      <div className="flex justify-center gap-6 px-36 pb-12 mt-12">
        <section className="flex flex-col gap-4 w-[55%] mt-12">
          <p className="text-lg font-semibold">EXPOSURE & ENGAGEMENT</p>
          <p className="text-7xl font-semibold w-[80%]">CONTENT CREATION</p>
          <p className="w-[70%] font-semibold mt-4">Tell your story with engaging content. We craft compelling narratives and visuals that bring your brand to life, connecting with your audience across all platforms.</p>
        </section>

        <section className="relative h-[50vh] w-[40%] border-[1px] border-slate-950 rounded-lg overflow-hidden flex gap-2">
          {/* Scrolling content */}
          <div className="flex flex-col">
          <div className="flex flex-col gap-2 animate-scroll-up">
            {images.concat(images).map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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

      <div className="flex justify-center gap-6 px-36 pb-12 mt-12">
        <section className="flex flex-col gap-4 w-[55%] mt-12">
          <p className="text-lg font-semibold">KEEP YOUR AUDIENCE UPDATED</p>
          <p className="text-7xl font-semibold w-[80%]">GRAPHIC DESIGN</p>
          <p className="w-[70%] font-semibold mt-4">Stand out from the competition with eye-catching graphics. From custom logos to promotional materials, our designs capture your brand's essence and leave a lasting impression.</p>
        </section>

        <section className="relative h-[50vh] w-[40%] border-[1px] border-slate-950 rounded-lg overflow-hidden flex gap-2">
          {/* Scrolling content */}
          <div className="flex flex-col">
          <div className="flex flex-col gap-2 animate-scroll-up">
            {images.concat(images).map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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

      <div className="flex justify-center gap-6 px-36 pb-12 mt-12">
        <section className="flex flex-col gap-4 w-[55%] mt-12">
          <p className="text-lg font-semibold">WE DO IT ALL FOR YOU</p>
          <p className="text-7xl font-semibold w-[80%]">SOCIAL MEDIA MANAGEMENT</p>
          <p className="w-[70%] font-semibold mt-4">Grow your online presence with tailored social media strategies. We handle everything from post scheduling to audience engagement, ensuring your content gets the attention it deserves.</p>
        </section>

        <section className="relative h-[50vh] w-[40%] border-[1px] border-slate-950 rounded-lg overflow-hidden flex gap-2">
          {/* Scrolling content */}
          <div className="flex flex-col">
          <div className="flex flex-col gap-2 animate-scroll-up">
            {images.concat(images).map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
                <Image
                  width={1000}
                  height={1000}
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
    </div>
  );
};

export default VerticalCarousel;
