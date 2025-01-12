import React from 'react'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, MessageCircle, Phone, Twitter, Youtube } from 'lucide-react'
import { FaTiktok } from "react-icons/fa";

const Contacthero = () => {
  return (
    <div className="w-full flex bg-[#FAFAFA] h-[100vh] px-12">
        <section className="xl:w-[35%] h-[95%] pl-12 flex flex-col justify-between pb-12">
            <div className="flex flex-col">
                <Link href="/">
                    <Image
                        width={100}
                        height={100}
                        src="/assets/images/logo4.png"
                        alt="Stephenson media logo"
                    />
                </Link>

                <div className="flex gap-2 mt-12">
                    <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-white border-[1px] border-slate-200 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
                        <MessageCircle />
                    
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <p className="font-semibold text-xl">Chat to us</p>
                        <p>Our fiendly team is here to help</p>
                        <p className="font-semibold">stephensonmedia@gmail.com</p>
                    </div>
                </div>

                <div className="flex gap-2 mt-12">
                    <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-white border-[1px] border-slate-200 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
                        <Phone />
                    
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <p className="font-semibold text-xl">Call us</p>
                        <p>Mon-Fri from 8am to 5pm</p>
                        <p className="font-semibold">+1 647 888 9234</p>
                    </div>
                </div>


                <div className="flex gap-2 mt-12">
                    <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-white border-[1px] border-slate-200 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
                        <Phone />
                    
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <p className="font-semibold text-xl">Call us</p>
                        <p>Mon-Fri from 8am to 5pm</p>
                        <p className="font-semibold">+1 647 888 9234</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-white border-[1px] border-slate-200 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
                    <Instagram />
                </div>

                <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-white border-[1px] border-slate-200 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
                    <Facebook />
                </div>

                <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-white border-[1px] border-slate-200 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
                    <Twitter />
                </div>

                <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-white border-[1px] border-slate-200 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
                    <Youtube />
                </div>

                <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-white border-[1px] border-slate-200 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
                    <FaTiktok />
                </div>
            </div>
        </section>

        <section className="xl:w-[65%] h-[92%] flex flex-col gap-2 rounded-2xl px-28 pt-20 bg-[#ececec]">
            <div className="flex flex-col gap-2 font-semibold w-[70%]">
                <h1 className="text-5xl">Got ideas? We've got the skills. Lets team up.</h1>
                <p>Tell us more about yourself and what you've got in mind.</p>
            </div>

            <div className="flex flex-col gap-8 mt-8">
                <Input type="text" placeholder='Name' className="w-full h-[55px] p-2 border-t-0 border-x-0 rounded-none border-b-[2px] border-slate-600 placeholder:font-semibold placeholder:text-base focus-visible:ring-0"/>

                <Input type="email" placeholder='Email' className="w-full h-[55px] p-2 border-t-0 border-x-0 rounded-none border-b-[2px] border-slate-600 placeholder:font-semibold placeholder:text-base focus-visible:ring-0"/>

                <Input type="text" placeholder='Company Name' className="w-full h-[55px] p-2 border-t-0 border-x-0 rounded-none border-b-[2px] border-slate-600 placeholder:font-semibold placeholder:text-base focus-visible:ring-0"/>

                <Textarea placeholder="Tell us more about your project" className="w-full h-[55px] p-2 border-t-0 border-x-0 rounded-none border-b-[2px] border-slate-600 placeholder:font-semibold placeholder:text-base focus-visible:ring-0" />
            </div>

            <div className="flex flex-col gap-3 mt-6">
                <p className="font-semibold">Service of Interest</p>
                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" />
                        <p>Videography</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" />
                        <p>Photography</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" />
                        <p>Graphic Design</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" />
                        <p>Social Media Management</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" />
                        <p>Content Creation</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" />
                        <p>Website Development</p>
                    </div>
                </div>


                
            </div>

            <Button className="w-full h-[55px] mt-12">Lets get started!</Button>
        </section>
    </div>
  )
}

export default Contacthero