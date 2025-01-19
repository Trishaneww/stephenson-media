import React from 'react'

const Stats = () => {
  return (
    <div className="grid grid-cols-1 xl:flex justify-between px-12 gap-6 lg:px-20 pb-20 pt-20">
        <div className="flex flex-col">
            <p className="font-semibold text-3xl md:text-4xl lg:text-6xl">5+</p>
            <p className="font-semibold text-lg text-gray-600">Years Experience</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-3xl md:text-4xl lg:text-6xl">3,000,000+</p>
            <p className="font-semibold text-lg text-gray-600">Social Media Impressions</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-3xl md:text-4xl lg:text-6xl">450+</p>
            <p className="font-semibold text-lg text-gray-600">Projects Completed</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold  text-3xl md:text-4xl lg:text-6xl">5,000+</p>
            <p className="font-semibold text-lg text-gray-600">Hours of Captured Footage</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-3xl md:text-4xl lg:text-6xl">100+</p>
            <p className="font-semibold text-lg text-gray-600">Brands Served</p>
        </div>
    </div>
  )
}

export default Stats