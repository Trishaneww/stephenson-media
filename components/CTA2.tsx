

"use client"
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import '../styles/global.scss';
import { ArrowUpRight } from 'lucide-react';
import LogoCarousel from './LogoCarousel'


const CTA2 = () => {
    const  [error, setError] = useState("");
    const { toast } = useToast()
    const sendEmail = (e:any) => {
    e.preventDefault();
    try {
      if (e.target.email.value === "") {
          setError("Email is required")
      } else {
        emailjs.sendForm('service_luvg8op', 'template_oirz684' , e.target , '1MxDwCSvQF6Leln4f');
        e.target.reset()
        setError("")

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
    <div className="">
      <LogoCarousel />
    </div>
  )
}

export default CTA2