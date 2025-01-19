import React from 'react'

const HypemediaHero = () => {
  return (
    <div className="h-[94vh] flex flex-col justify-center items-center">
    <div className='z-20 -mt-64 font-semibold flex flex-col gap-2 justify-center items-center'>
      <h1 className="text-4xl md:text-6xl lg:text-8xl z-20 text-slate-50 font-semibold text-center">HYPE SPORTS</h1>
      <h1 className="text-base lg:text-xl z-20 text-slate-50 font-semibold">POWERED BY STEPHENSON MEDIA</h1>
    </div>    
    
    {/* <h1 className="text-8xl z-20 text-slate-50 -mt-80 font-semibold">HYPEMEDIA.</h1> */}
    {/* Add your other homepage sections here */}
    <div className="flex justify-center items-center absolute top-0 overflow-hidden h-[94vh]">
        <video autoPlay loop muted className="w-full">
          <source src="/assets/videos/homepage1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
{/* 
    <div className="flex flex-col absolute top-[70%] left-[10%] z-20 items-center justify-center w-[300px] gap-2">
      <p className="text-2xl font-bold text-slate-50 tracking wide">HYPE MEDIA.</p>
      <p className="text-sm w-[90%] text-center text-slate-50">Follow the journey of NFL prospects as they achieve their lifelong dream of getting Drafted</p>
      <Button className="border-[1px] border-slate-50 bg-transparent rounded-full w-[130px] h-[35px] font-bold text-base tracking-wide hover:bg-slate-400">See more</Button>
    </div> */}

    <div className="h-[94vh] w-full bg-[#00000078] absolute top-0">

    </div>
</div>
  )
}

export default HypemediaHero