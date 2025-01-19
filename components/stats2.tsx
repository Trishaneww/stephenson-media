import React from 'react'

const Stats2 = () => {
  return (
    <div className="grid grid-cols-1 xl:flex items-center justify-between px-12 py-28 gap-6 lg:px-20  bg-[#222222] text-slate-50 mb-20">
        <div className="flex flex-col">
            <p className="font-semibold text-3xl md:text-4xl lg:text-6xl">5+</p>
            <p className="font-semibold text-lg">Years Experience</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-3xl md:text-4xl lg:text-6xl">3,000,000+</p>
            <p className="font-semibold text-lg ">Social Media Impressions</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-3xl md:text-4xl lg:text-6xl">450+</p>
            <p className="font-semibold text-lg">Projects Completed</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold  text-3xl md:text-4xl lg:text-6xl">5,000+</p>
            <p className="font-semibold text-lg">Hours of Captured Footage</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-3xl md:text-4xl lg:text-6xl">100+</p>
            <p className="font-semibold text-lg ">Brands Served</p>
        </div>
    </div>
  )
}

export default Stats2