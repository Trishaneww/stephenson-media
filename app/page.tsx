import Body from "@/components/Body";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Home from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reels from "@/components/Reels";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";



const Website= () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
      <Navbar />
      <Home />
      <Services />
      <Body />
      {/* <Testimonials2 /> */}
      <Reels />
      <Stats />
      <Testimonials />
      <Technologies />
      <Faq />
      <CTA />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Website;