import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-16 justify-center items-center bg-[#222222] py-12 px-4 lg:px-20 lg:h-[400px]">
      <div className="flex flex-col items-center justify-center text-slate-50 lg:w-[33.3%] gap-4">
        <p className="font-semibold text-base text-center w-[90%]">"Their made the entire process seamless. From brainstorming ideas to delivering the final video, they were professional, communicative, and incredibly skilled. The quality of their work speaks for itself. Can’t wait to work with them again!"</p>
        <Image
          width={200}
          height={200}
          src="/assets/images/samsung1.png"
          alt="samsung logo"
          className="max-w-[150px] lg:max-w-[400px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-slate-50 lg:w-[33.3%] gap-4">
        <p className="font-semibold text-base text-center w-[90%]">"Their made the entire process seamless. From brainstorming ideas to delivering the final video, they were professional, communicative, and incredibly skilled. The quality of their work speaks for itself. Can’t wait to work with them again!"</p>
        <Image
          width={200}
          height={200}
          src="/assets/images/samsung1.png"
          alt="samsung logo"
          className="max-w-[150px] lg:max-w-[400px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-slate-50 lg:w-[33.3%] gap-4">
        <p className="font-semibold text-base text-center w-[90%]">"Their made the entire process seamless. From brainstorming ideas to delivering the final video, they were professional, communicative, and incredibly skilled. The quality of their work speaks for itself. Can’t wait to work with them again!"</p>
        <Image
          width={200}
          height={200}
          src="/assets/images/samsung1.png"
          alt="samsung logo"
          className="max-w-[150px] lg:max-w-[400px]"
        />
      </div>
        
    </div>
  )
}

export default Testimonials