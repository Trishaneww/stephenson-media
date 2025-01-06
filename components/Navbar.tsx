"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import Image from 'next/image'
import logo from '../public/assets/images/logo2.png'
import { Menu, X } from 'lucide-react'
import { NavDropDown } from './Navdropdown'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const switch_menu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="flex lg:flex-col w-full justify-between lg:justify-center items-center pt-8 navbar z-50 gap-8 bg-transparent px-4">
      <Link href='/' className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50  hover:text-[#a9c0ff] w-[150px]"
          )}>
            <div className="w-[60%] lg:w-[100%]">
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
            "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-50 hover:text-[#a9c0ff]"
          )}
        >
          <span className="!cursor-pointer text-sm font-bold tracking-wide">{navItem.name}</span>
        </Link>
      ))}
    <NavDropDown />
        <Link 
          href='/'
          className={cn(
            "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-50 hover:text-[#a9c0ff]"
          )}
        >
          <span className="!cursor-pointer text-sm font-bold tracking-wide">CONTACT</span>
        </Link>
      </div>
    {/* <div className="hidden lg:flex gap-2 justify-center items-center">
        <Link href="/login">
          <Button className="w-[100px] h-[40px] hover:bg-transparent text-slate-50 bg-transparent p-2 text-base">Login</Button>
        </Link>

        <Link href="/signup">
          <Button className="w-[120px] h-[40px] bg-white hover:bg-[#a9c0ff] hover:text-slate-950 rounded-lg text-base text-slate-950">Sign Up<FaArrowRightLong className="ml-2"/></Button>
        </Link>
    </div> */}


<nav className="lg:hidden bg-transparent">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button text-slate-50 mt-2">
      <Menu  size={30}/>
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container bg-[#00030F] text-slate-50">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-slate-50">
        <X size={30}/>
       
      </label>
      <a href="/#faq">FAQ</a> 
      <a href="/portfolio">Portfolio</a>
      <a href="/services">Services</a>
      <a href="/pricing">Pricing</a>
      <a href="/pricing">Contact</a>
    </div>
  </nav>
  </div>
  )}

export default Navbar