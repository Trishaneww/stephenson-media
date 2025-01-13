import React from 'react'

const Stats = () => {
  return (
    <div className="flex justify-between px-28 pb-20 pt-20">
        <div className="flex flex-col">
            <p className="font-semibold text-6xl">10+</p>
            <p className="font-semibold text-lg text-gray-600">Years Experience</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-6xl">700,000+</p>
            <p className="font-semibold text-lg text-gray-600">Social Media Impressions</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-6xl">128</p>
            <p className="font-semibold text-lg text-gray-600">Projects Completed</p>
        </div>

        <div className="flex flex-col">
            <p className="font-semibold text-6xl">5,000+</p>
            <p className="font-semibold text-lg text-gray-600">Hours of Captured Footage</p>
        </div>
    </div>
  )
}

export default Stats