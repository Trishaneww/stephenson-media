"use client"
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import LogoCarousel from '@/components/LogoCarousel'
import LogoCarousel2 from '@/components/LogoCarousel2'
import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar2'
import { MoveDownRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';




const photography = () => {
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

  return (
    <div className="flex flex-col items-center scroll-smooth bg-[#FAFAFA]">
        <div className="flex flex-col bg-[#222222] w-full items-center pb-12">
            <Navbar />
            <section className="flex flex-col w-[86%] lg:w-[75%] mb-20 mt-36 gap-2 justify-center items-start">
                    <p className="font-bold lg:text-lg text-slate-50 text-center">PHOTOGRAPHY</p>
                    <p className="font-bold text-4xl md:text-5xl lg:text-7xl text-slate-50">Stay ahead with a relevant & trending social presence.</p>
                    <div className="flex gap-2 text-slate-50 items-center lg:text-xl font-semibold mt-4 border-b-[2px] border-slate-50 pb-2">
                        <p>See our process</p>
                        <MoveDownRight size={20}/>
                    </div>
            </section>

            <div className="lg:-mt-20 w-[90%] lg:w-[75%] overflow-hidden flex  items-center">
                <LogoCarousel2 />
            </div>
        </div>


        {/* <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[75%] gap-4 px-6 mb-20 lg:-mt-20">
            <p className="font-semibold text-2xl lg:text-3xl secondary">WHY WE DO IT</p>
            <p className="lg:w-2/3 lg:text-xl">Our approach to social media ensures your brand stays relevant and on-trend in an ever-evolving digital landscape. While it's easier than ever to go viral, cutting through the noise and building a genuinely engaged audience is more challenging than ever. By keeping up with the latest trends and platform updates, we help your business maintain a competitive edge and engage effectively with your followers.</p>
        </div> */}



        <section className="flex flex-col gap-2 items-center justify-center ">
            <div className="lg:w-[75%] flex flex-col lg:flex-row justify-between lg:items-stretch gap-6 px-6 pb-12 mt-12">
                <section className="flex flex-col gap-4 lg:w-1/2 mt-12">
                    <p className="text-3xl lg:text-5xl xl:text-7xl font-semibold secondary">Discovery</p>
                    <p className="lg:text-lg mt-4">We start by understanding your company's goals and identifying the most effective platforms for your brand, such as Instagram, TikTok, LinkedIn, Facebook, Pinterest, YouTube or Twitter. This phase sets the foundation for a tailored approach to maximize your social media impact and create the best results possible.</p>
                </section>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <Image
                        width={500}
                        height={500}
                        src="/assets/images/casestudy3.png"
                        alt="placeholder image"
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div className="lg:w-[75%] flex flex-col lg:flex-row-reverse justify-between lg:items-stretch gap-6 px-6 pb-12 mt-12">
                <section className="flex flex-col gap-4 lg:w-1/2 mt-12">
                    <p className="text-3xl lg:text-5xl xl:text-7xl font-semibold secondary">Platform Specific Approaches</p>
                    <p className="lg:text-lg mt-4">We start by understanding your company's goals and identifying the most effective platforms for your brand, such as Instagram, TikTok, LinkedIn, Facebook, Pinterest, YouTube or Twitter. This phase sets the foundation for a tailored approach to maximize your social media impact and create the best results possible.</p>
                </section>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <Image
                        width={500}
                        height={500}
                        src="/assets/images/casestudy3.png"
                        alt="placeholder image"
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div className="lg:w-[75%] flex flex-col lg:flex-row justify-between lg:items-stretch gap-6 px-6 pb-12 mt-12">
                <section className="flex flex-col gap-4 lg:w-1/2 mt-12">
                    <p className="text-3xl lg:text-5xl xl:text-7xl font-semibold secondary">Your Own Personalized Team</p>
                    <p className="lg:text-lg mt-4">We start by understanding your company's goals and identifying the most effective platforms for your brand, such as Instagram, TikTok, LinkedIn, Facebook, Pinterest, YouTube or Twitter. This phase sets the foundation for a tailored approach to maximize your social media impact and create the best results possible.</p>
                </section>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <Image
                        width={500}
                        height={500}
                        src="/assets/images/casestudy3.png"
                        alt="placeholder image"
                        className="rounded-lg"
                    />
                </div>
            </div>


            <div className="lg:w-[75%] flex flex-col lg:flex-row-reverse justify-between lg:items-stretch gap-6 px-6 pb-12 mt-12">
                <section className="flex flex-col gap-4 lg:w-1/2 mt-12">
                    <p className="text-3xl lg:text-5xl xl:text-7xl font-semibold secondary">Feedback & Reporting</p>
                    <p className="lg:text-lg mt-4">We start by understanding your company's goals and identifying the most effective platforms for your brand, such as Instagram, TikTok, LinkedIn, Facebook, Pinterest, YouTube or Twitter. This phase sets the foundation for a tailored approach to maximize your social media impact and create the best results possible.</p>
                </section>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <Image
                        width={500}
                        height={500}
                        src="/assets/images/casestudy3.png"
                        alt="placeholder image"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>


        <section className="lg:w-[72.5%] border-[1px] border-gray-200 rounded-lg overflow-hidden flex flex-col gap-2 mt-20">
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
        </section >



        <ContactForm />
        <Footer />
        <Footer2 />
    </div>
  )
}

export default photography