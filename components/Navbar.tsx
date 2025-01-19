"use client"
import React from 'react'
import Link from 'next/link'
import { faqData, navItems, resources, resources2 } from '@/data'
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import Image from 'next/image'
import logo from '../public/assets/images/logo2.png'
import { Menu, X } from 'lucide-react'
import { NavDropDown } from './Navdropdown'
import { NavDropDown2 } from './Navbardropdown2'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Navbar = () => {
 
  return (
    <div className="flex lg:flex-col w-full justify-between lg:justify-center items-center pt-8 navbar z-50 gap-8 bg-transparent px-4">
      <Link href='/' className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50  hover:text-[#b2b2b2] w-[150px]"
          )}>
            <div className="w-[50%] lg:w-[100%]">
            <Image 
              alt="stephenson media logo"
              src={logo}
              width={1000}
              height={1000}
              priority
            />
            </div>
      </Link>

      <div className="flex justify-center items-center gap-8">
      {navItems.map((navItem: any, idx: number) => (
        <Link 
          key={idx} 
          href={navItem.link}
          className={cn(
            "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-50 hover:text-[#b2b2b2]"
          )}
        >
          <span className="!cursor-pointer text-sm font-bold tracking-wide">{navItem.name}</span>
        </Link>
      ))}
    <NavDropDown2 />
    <NavDropDown />
        <Link 
          href='/contact'
          className={cn(
            "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-50 hover:text-[#b2b2b2]"
          )}
        >
          <span className="!cursor-pointer text-sm font-bold tracking-wide">GET STARTED</span>
        </Link>
      </div>


  <nav className="lg:hidden bg-transparent">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button text-slate-50 mt-2">
      <Menu  size={30}/>
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container ">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-slate-950">
        <X size={30}/>
       
      </label>
      <Link href="/">HOME</Link> 
      <Link href="/">ABOUT US</Link>
      <Link href="/#options">OPTIONS</Link>

      <div className="flex w-full p-4 text-slate-950 text-base -mt-8">
          <Accordion type="single" collapsible className="flex flex-col gap-2">
                    <AccordionItem value={`industries`} className="border-none p-4 rounded-2xl">
                    <AccordionTrigger className="text-base lg:text-lg text-left font-normal -ml-[1.5px]">INDUSTRIES</AccordionTrigger>
                        <AccordionContent className="text-base lg:text-lg">
                        {resources2.map((accordion:any, idx:number) => (
                          <Link href={accordion.link} className="text-slate-950 -mt-4" key={idx}>{accordion.title}</Link>
                        ))}
                        </AccordionContent>
                    </AccordionItem>
        </Accordion>
      </div>
    
      <div className="flex w-full p-4 text-slate-950 text-base -mt-16">
          <Accordion type="single" collapsible className="flex flex-col gap-2">
                    <AccordionItem value={`services`} className="border-none p-4 rounded-2xl">
                    <AccordionTrigger className="text-base lg:text-lg text-left font-normal -ml-[1.5px]">SERVICES</AccordionTrigger>
                        <AccordionContent className="text-base lg:text-lg">
                        {resources.map((accordion:any, idx:number) => (
                          <Link href={accordion.link} className="text-slate-950 -mt-4" key={idx}>{accordion.title}</Link>
                        ))}
                        </AccordionContent>
                    </AccordionItem>
        </Accordion>
      </div>

      <Link href="/contact" className="-mt-8">CONTACT</Link>

    </div>
  </nav>
  </div>
  )}

export default Navbar