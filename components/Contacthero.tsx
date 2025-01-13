"use client"
import React from 'react'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Facebook, Instagram, MessageCircle, Phone, Star, Twitter, Youtube } from 'lucide-react'
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from './hooks/use-toast'

const images = [
    "/assets/images/contact1.jpg",
    "/assets/images/reel2.png",
    "/assets/images/reel3.jpg",
  ];

const Contacthero = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Explicitly type state as number

    const handleNext = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length); // Type prevIndex
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex - 1 + images.length) % images.length); // Type prevIndex
    };

    const [emailError, setEmailError] = useState("")
    const [nameError, setNameError] = useState("")
    
    const { toast } = useToast()
    const sendEmail = (e:any) => {
      e.preventDefault();
      console.log("clicked")
  
      try {
        console.log("hi")
        if (e.target.email.value === "" || e.target.full_name.value === "") {
  
            if (e.target.email.value === "") {
              setEmailError("Email is required")
              if (e.target.full_name.value === "") {
                setNameError("Fullname is required")
              }
            } 
   
        } else {
            console.log("hello")
            emailjs.sendForm('service_luvg8op', 'template_sx6i957' , e.target , '1MxDwCSvQF6Leln4f');
             e.target.reset()
             setEmailError("")
             setNameError("")
  
            toast({
                title: "Email Sent",
                description: "We will get back to you shortly",
            })
        }
      } catch (err) {
        console.log(err)
      }
    }
  return (
    <div className="w-full flex gap-4 bg-[#FAFAFA] h-[100vh] px-4">
        {/* <section className="xl:w-[35%] h-[95%] pl-12 flex flex-col justify-between pb-12">
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
        </section> */}

        <form onSubmit={sendEmail} className="xl:w-[40%] h-[94%] flex flex-col gap-2 rounded-2xl px-10 pt-6 bg-[#f0f0f0]">
            <Link href="/">
                    <Image
                        width={100}
                        height={100}
                        src="/assets/images/logo4.png"
                        alt="Stephenson media logo"
                    />
            </Link>
            <div className="flex flex-col gap-2 font-semibold mt-6">
                <h1 className="text-4xl">Got ideas? We've got the skills. Lets team up.</h1>
                <p>Tell us more about yourself and what you've got in mind.</p>
            </div>

            <div className="flex flex-col gap-4 mt-8">
                <Input type="text" placeholder='Name' name="full_name" className="w-full h-[50px] p-2 bg-slate-50  placeholder:text-base focus-visible:ring-0"/>

                <Input type="email" placeholder='Email' name="email" className="w-full h-[50px] p-2 bg-slate-50  placeholder:text-base focus-visible:ring-0"/>

                <Input type="text" placeholder='Phone' name="phone" className="w-full h-[50px] p-2 bg-slate-50  placeholder:text-base focus-visible:ring-0"/>

                <Textarea placeholder="Tell us more about your project" name="phone" className="w-full h-[115px] p-2 bg-slate-50  placeholder:text-base focus-visible:ring-0" />
            </div>

            <div className="flex flex-col gap-3 mt-6">
                <p className="font-semibold">Service of Interest</p>
                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className="bg-slate-50 border-gray-300" />
                        <p>Videography</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className="bg-slate-50 border-gray-300"/>
                        <p>Photography</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className="bg-slate-50 border-gray-300"/>
                        <p>Graphic Design</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className="bg-slate-50 border-gray-300"/>
                        <p>Social Media Management</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms"className="bg-slate-50 border-gray-300" />
                        <p>Content Creation</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className="bg-slate-50 border-gray-300"/>
                        <p>Website Development</p>
                    </div>
                </div>
            </div>
            <Button type="submit" className="w-full h-[55px] mt-12 text-lg">Lets get started!</Button>
        </form>

        
        <div className="relative w-full h-[94%] rounded-2xl">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute bottom-20 left-4 space-x-2 z-20 text-slate-50 flex flex-col gap-2 w-[80%]">
                <div className="flex gap-2">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p className="text-lg">"We wanted to capture the excitement of our championship season, and this team delivered beyond our expectations. The highlight reel they created was nothing short of incredible and made our fans feel like they were part of the action."</p>
                <p className="font-semibold text-lg mt-2">— Mike Redding</p>
                <p>Head Coach, City Strikers FC</p>
            </div>



            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
                <button
                    onClick={handlePrev}
                    className="bg-transparent text-white w-[100px] h-[100px] px-3 py-2 rounded text-6xl flex justify-center items-center"
                >
                <ArrowLeft size={40}/>
                </button>
                <button
                    onClick={handleNext}
                    className="bg-transparent  text-white w-[100px] h-[100px] px-3 py-2 rounded flex justify-center items-center"
                >
                <ArrowRight size={40}/>
                </button>
            </div>
            <div className="absolute top-0 w-full h-full bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-60 rounded-2xl">hi</div>
        </div>




    </div>
  )
}

export default Contacthero