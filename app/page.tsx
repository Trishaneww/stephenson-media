import Body from "@/components/Body";
import CTA from "@/components/CTA";
import CTA2 from "@/components/CTA2";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Footer3 from "@/components/Footer3";
import Gallery from "@/components/Gallery";
import Home from "@/components/Hero";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import Reels from "@/components/Reels";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Stats2 from "@/components/stats2";
import Subpage from "@/components/Subpage";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";



const Website= () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
      <Navbar />
      <Home />
      <div id="services">
        <Services />
      </div>
      <CTA2 />
      {/* <Body /> */}
      <Subpage />
      <Testimonials />
      <Gallery />
      <Technologies />
      {/* <Testimonials2 /> */}
      {/* <Stats /> */}
      <Stats2 />
      <Industries />
      {/* <div id="options">
        <Technologies />
      </div> */}

      <div id="faq">
        <Faq />
      </div>
      {/* <CTA /> */}
      <Footer3 />
      <Footer />
      <Footer2 />
      <Toaster />
    </div>
  );
};

export default Website;


// "use client"
// import { Input } from './ui/input'
// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { useToast } from './hooks/use-toast'
// import emailjs from '@emailjs/browser';
// import '../styles/global.scss';
// import { ArrowUpRight } from 'lucide-react';

// const Quote = () => {
//     const  [error, setError] = useState("");

//   const { toast } = useToast()

//   const sendEmail = (e:any) => {
//     e.preventDefault();

//     try {
//       if (e.target.email.value === "") {
//           setError("Email is required")
//       } else {

//           emailjs.sendForm('service_luvg8op', 'template_oirz684' , e.target , '1MxDwCSvQF6Leln4f');
//            e.target.reset()
//            setError("")

//           toast({
//               title: "Email Sent",
//               description: "We will get back to you shortly",
//     })

//       }
//     } catch (err) {
//       console.log(err)
//       // top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]
//     }
//   }
//   return (
//     <div className="flex flex-col gap-2 justify-center items-center py-20">
//         <p className="font-semibold text-5xl">Recieve your free quote today</p>
//          <form className="flex justify-center gap-4 mt-6" onSubmit={sendEmail}>
//           <div className="flex flex-col items-start w-full">
//               <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[360px] h-[54px] text-lg border-[1px] bg-transparent border-gray-400 text-slate-50 placeholder:text-slate-950"/>
//               <p className="ml-1 text-red-600">{error}</p>
//           </div>
//           <Button type="submit" className="w-[260px] h-[53px] text-base font-semibold">Submit</Button>
//         </form>

//     </div>
//   )
// }

// export default Quote