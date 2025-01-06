import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (

    <div className="bg-[#222222] flex flex-col pt-24 pb-12 px-12">
        <div className="flex flex-col lg:flex-row justify-between">
        <section className="flex gap-20">
            <div className="flex flex-col gap-2 text-slate-50">
                <div className="flex gap-4 h-[170px]">
                    <p>1</p>
                    <div className="flex flex-col">
                        <p className="text-2xl mb-2 font-semibold">Site</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Testimonials</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 h-[170px]">
                    <p>1</p>
                    <div className="flex flex-col">
                        <p className="text-2xl mb-2 font-semibold">Site</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Testimonials</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 h-[170px]">
                    <p>1</p>
                    <div className="flex flex-col">
                        <p className="text-2xl mb-2 font-semibold">Site</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Testimonials</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-2 text-slate-50">
                <div className="flex gap-4 h-[170px]">
                    <p>1</p>
                    <div className="flex flex-col">
                        <p className="text-2xl mb-2 font-semibold">Site</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Testimonials</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 h-[170px]">
                    <p>1</p>
                    <div className="flex flex-col">
                        <p className="text-2xl mb-2 font-semibold">Site</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Testimonials</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 h-[170px]">
                    <p>1</p>
                    <div className="flex flex-col">
                        <p className="text-2xl mb-2 font-semibold">Site</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Testimonials</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>
            </div>



        </section>
        <Image
            height={800}
            width={800}
            src="/assets/images/logo.png"
            alt="stephenson media logo" 
        />
        </div>
        <div className="h-[2px] w-full bg-slate-300">hi</div>
    </div>
  )
}

export default Footer