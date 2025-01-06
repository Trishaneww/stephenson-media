import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Home from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";



const Website= () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#eaeaea]">
      <Navbar />
      <Home />
      <Services />
      <Body />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Website;