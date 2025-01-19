"use client"
import React from 'react'
import Link from 'next/link'
import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import Image from 'next/image'
import logo from '../public/assets/images/logo2.png'
import { Menu, X } from 'lucide-react'
import { NavDropDown } from './Navdropdown'
import { NavDropDown2 } from './Navbardropdown2'

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
      <Link href="/#faq">FAQ</Link> 
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/services">Services</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/pricing">Contact</Link>
    </div>
  </nav>
  </div>
  )}

export default Navbar