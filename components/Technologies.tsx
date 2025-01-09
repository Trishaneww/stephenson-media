import Image from 'next/image'
import React from 'react'
import tech2 from '../public/assets/images/tech3.png'

const Technologies = () => {
  return (
    <div className="flex flex-col items-center gap-12 mt-44 mb-20">

      {/* <p className="text-2xl lg:text-3xl font-bold text-slate-950 w-[90%] lg:w-[45%] text-center">Extend GitHub Copilot with ready-to-use extensions or build your own using our developer platform with APIs, documentation, and guides.</p> */}
      <h1 className="text-slate-950  text-3xl md:text-3xl lg:text-5xl font-bold">Our tech stack</h1>

      <section className="flex justify-center items-center gap-2 md:gap-6">
          <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/tech1.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[68%] h-[68%] m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/tech2.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[68%] h-[68%] m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/tech3.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[99%] h-[99%] m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/tech4.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[99%] h-[99%] m-auto object-cover"
              />
          </div>

          <div className="flex flex-col items-center justify-center w-[90px] h-[90px] md:w-[140px] md:h-[140px] border-[1px] border-slate-200 rounded-full p-2">
            <div className="flex flex-col items-center justify-center w-[71px] h-[71px] md:w-[121px] md:h-[121px] bg-slate-200 rounded-full">
              <div className="flex flex-col items-center justify-center w-[70px] h-[70px] md:w-[120px] md:h-[120px] bg-white border-[1px] border-slate-200 rounded-full p-2">
                <Image
                  width={2000}
                  height={2000}
                  src="/assets/images/logo5.png"
                  alt="MGM sports book"
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/tech3.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[99%] h-[99%] m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/tech4.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[99%] h-[99%] m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/tech2.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[68%] h-[68%] m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/tech3.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[99%] h-[99%] m-auto object-cover"
              />
          </div>
      </section>   
    </div>
  )
}

export default Technologies