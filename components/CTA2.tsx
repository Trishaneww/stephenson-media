// "use client"
// import { Input } from './ui/input'
// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { useToast } from './hooks/use-toast'
// import emailjs from '@emailjs/browser';
// import '../styles/global.scss';
// import { ArrowUpRight } from 'lucide-react';

// const CTA2 = () => {
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

// export default CTA2

"use client"
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import '../styles/global.scss';
import { ArrowUpRight } from 'lucide-react';


const CTA2 = () => {
    const  [error, setError] = useState("");
    const { toast } = useToast()
    const sendEmail = (e:any) => {
    e.preventDefault();
    try {
      if (e.target.email.value === "") {
          setError("Email is required")
      } else {
        emailjs.sendForm('service_luvg8op', 'template_oirz684' , e.target , '1MxDwCSvQF6Leln4f');
        e.target.reset()
        setError("")

        toast({
            title: "Email Sent",
            description: "We will get back to you shortly",
    })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
     <div className="flex flex-col gap-2 justify-center items-center py-20">
            <p className="font-semibold text-5xl">Receive your free quote today</p>
             <form className="flex justify-center gap-4 mt-6" onSubmit={sendEmail}>
              <div className="flex flex-col items-start">
                  <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[360px] h-[54px] text-lg border-[1px] bg-transparent border-gray-400 text-slate-50 placeholder:text-slate-950"/>
                  <p className="ml-1 text-red-600">{error}</p>
              </div>
              <Button type="submit" className="w-[260px] h-[53px] text-base font-semibold">Submit</Button>
            </form>
    
        </div>
  )
}

export default CTA2