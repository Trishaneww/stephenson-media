"use client"
import React from 'react'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import Link from 'next/link'
import Image from 'next/image'
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from './hooks/use-toast'


const ContactForm = () => {

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
      <form onSubmit={sendEmail} className="xl:w-[44%] flex flex-col items-center gap-2 rounded-2xl px-4 lg:px-10 py-6 pb-12 pt-6  mb-20 mt-20">
            {/* <Link href="/">
                    <Image
                        width={100}
                        height={100}
                        src="/assets/images/logo4.png"
                        alt="Stephenson media logo"
                    />
            </Link> */}
            <div className="flex flex-col items-center gap-2 font-semibold mt-6">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center">Got ideas? We've got the skills. Lets team up.</h1>
                {/* <p>Tell us more about yourself and what you've got in mind.</p> */}
            </div>
            <div className="flex flex-col gap-3 mt-6 w-full">
                <p className="font-semibold">Service of Interest</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className=" border-gray-300" />
                        <p>Videography</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className=" border-gray-300"/>
                        <p>Photography</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className="border-gray-300"/>
                        <p>Graphic Design</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className=" border-gray-300"/>
                        <p>Social Media Management</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms"className="bg-slate-50 border-gray-300" />
                        <p>Content Creation</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" className=" border-gray-300"/>
                        <p>Website Development</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 w-full">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

                <div className="flex flex-col w-full">
                  <p className="font-semibold">Name</p>
                  <Input type="text" placeholder='...' name="full_name" className="w-full h-[50px] p-2 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200"/>
                </div>

                <div className="flex flex-col w-full">
                  <p className="font-semibold">Email</p>
                  <Input type="email" placeholder='...' name="email" className="w-full h-[50px] p-2 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200"/>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                <div className="flex flex-col w-full">
                  <p className="font-semibold">Phone</p>
                  <Input type="text" placeholder='...' name="phone" className="w-full h-[50px] p-2 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200"/>
                </div>

                <div className="flex flex-col w-full">
                  <p className="font-semibold">Company Name</p>
                  <Input type="text" placeholder='...' name="company" className="w-full h-[50px] p-2 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200"/>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                <div className="flex flex-col w-full">
                  <p className="font-semibold">Budget</p>
                  <Input type="text" placeholder='$' name="budget" className="w-full h-[50px] p-2 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200"/>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="font-semibold">Comments</p>
                <Textarea placeholder="Tell us more about your project" name="phone" className="w-full h-[115px] p-2   placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200" />
              </div>
               
            </div>
            <Button type="submit" className="w-[60%]  h-[55px] mt-12 text-lg">Lets get started!</Button>
        </form>
  )
}

export default ContactForm