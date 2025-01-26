import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import '../styles/global.scss';
import Technologies from './Technologies';

const Subpage = () => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:gap-0 w-full">
        <div className="flex flex-col lg:flex-row-reverse w-full h-[100vh] lg:h-[95vh]">
            <div className="h-full lg:w-1/2 relative">
                <Image
                    src="/assets/images/alex3.jpg"
                    width={1000}
                    height={1000}
                    alt="a2g construction logo"
                    className="absolute top-0 w-full h-full object-cover"
                />
            </div>
          
            <div className="flex flex-col lg:w-1/2 text-left items-start justify-center px-6 lg:px-32 gap-6 mt-20 lg:mt-0 text-lg">
                <p className="font-extrabold secondary text-3xl lg:text-4xl w-[80%]">WE HANDLE EVERYTHING FOR YOU</p>
                <p>Our bathroom renovation service turns outdated spaces into modern, functional retreats designed to match your style and needs. From custom layouts and premium fixtures to flawless tile work, we handle every detail with quality craftsmanship and care.</p>
                <ul className="flex flex-col font-bold text-lg">
                    <li>- Full day photoshoots</li>
                    <li>- Custom Social Media Content</li>
                    <li>- Custom Social Media Content</li>
                    <li>- Custom Social Media Content</li>
                    <li>- Custom Social Media Content</li>
                </ul>
                {/* <Link href="/contact"><Button className="w-[240px] h-[55px] text-lg">Get a Free Estimate</Button></Link> */}
                <section className="flex flex-col items-center gap-6">
            <div className="relative w-[240px] h-[65px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10">
                <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-slate-950 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center font-semibold">Get a Free Estimate</div>
                <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-12 font-semibold">Contact Sales</Link>
            </div>
          </section>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-[100vh] lg:h-[60vh]">
            <div className="h-full lg:w-1/2 relative">
                <Image
                    src="/assets/images/alex4.jpg"
                    width={1000}
                    height={1000}
                    alt="a2g construction logo"
                    className="absolute top-0 w-full h-full object-cover"
                />
            </div>
          
            <div className="flex flex-col lg:w-1/2 text-left items-start justify-center px-6 lg:px-32 gap-6 mt-20 lg:mt-0 text-lg">
                <p className="font-extrabold secondary text-3xl lg:text-4xl">PREMIUM MONTHLY SERVICES</p>
                <p>Our basement renovation service transforms underutilized spaces into beautiful, functional areas tailored to your needs. Whether you’re creating a cozy living space, a home office, or an entertainment hub, we handle every aspect, from custom layouts and insulation to lighting and flooring. With a focus on quality craftsmanship and smart design, we ensure your basement is both comfortable and durable. Let us help you maximize your home’s potential with a renovation that adds value and creates a space your family will love.</p>
                {/* <Link href="/contact"><Button className="w-[240px] text-lg h-[55px]">Get a Free Estimate</Button></Link> */}
                <section className="flex flex-col items-center gap-6">
            <div className="relative w-[240px] h-[65px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10">
                <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-slate-950 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center font-semibold">Get a Free Estimate</div>
                <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-12 font-semibold">Contact Sales</Link>
            </div>
          </section>
            </div>
        </div>
    </div>
  )
}

export default Subpage