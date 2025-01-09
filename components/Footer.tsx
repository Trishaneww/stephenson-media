import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#222222] flex flex-col pt-24 pb-12 px-12 overflow-x-hidden">
        <div className="flex flex-col flex-wrap lg:flex-row justify-between">
        <section className="flex flex-col lg:flex-row lg:gap-20">
            <div className="flex flex-col gap-2 text-slate-50">
                <div className="flex gap-4 h-[185px]">
                    <p>1</p>
                    <div className="flex flex-col">
                        <p className="text-lg lg:text-2xl mb-2 font-semibold">Site</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Testimonials</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 h-[185px]">
                    <p>2</p>
                    <div className="flex flex-col">
                        <p className="text-lg lg:text-2xl mb-2 font-semibold">Social</p>
                        <ul className="text-slate-300 text-sm">
                            <a href="/https://www.instagram.com/stephenson.media/" target="_blank"><li>Instagram</li></a>
                            <a href="/https://www.instagram.com/stephenson.media/" target="_blank"><li>Tiktok</li></a>
                            <a href="/https://www.instagram.com/stephenson.media/" target="_blank"><li>Facebook</li></a>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 h-[185px]">
                    <p>3</p>
                    <div className="flex flex-col">
                        <p className="text-lg lg:text-2xl mb-2 font-semibold">Contact</p>
                        <ul className="text-slate-300 text-sm">
                            <li>mediabystephenson@gmail.com</li>
                            <li>(905)-330-9374</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-2 text-slate-50">
                <div className="flex gap-4 h-[185px]">
                    <p>4</p>
                    <div className="flex flex-col">
                        <p className="text-lg lg:text-2xl mb-2 font-semibold">Services</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Photography</li>
                            <li>Videography</li>
                            <li>Premium content creation</li>
                            <li>Graphic design</li>
                            <li>Website design & development</li>
                            <li>Social media management</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 h-[185px]">
                    <p>5</p>
                    <div className="flex flex-col">
                        <p className="text-lg lg:text-2xl mb-2 font-semibold">Legal</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Privacy</li>
                            <li>Terms of service</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 h-[185px]">
                    <p>6</p>
                    <div className="flex flex-col">
                        <p className="text-lg lg:text-2xl mb-2 font-semibold">Industries</p>
                        <ul className="text-slate-300 text-sm">
                            <li>Sports</li>
                            <li>Auto</li>
                            <li>Resteraunts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative w-full lg:w-[60%] lg:-top-16">
            <video autoPlay loop muted className="w-full h-full">
                <source src="/assets/videos/homepage.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>

            <div className="w-[105%] absolute top-0 -left-2 h-full">
                  <Image
            height={2000}
            width={2000}
            src="/assets/images/logo3.png"
            alt="stephenson media logo" 
            className="h-full w-full"/>
            </div>

        </section>
        </div>
        <div className="h-[2px] w-full bg-slate-300"></div>
    </div>
  )
}

export default Footer