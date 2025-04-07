import React from "react";
import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/HeroSection";
import Feacture from "../components/Landing/Feacture";
import Working from "../components/Landing/Working";
import Footer from "../components/Landing/Footer";
import Testimonials from "../components/Landing/Testimonials";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
     <Header/>

      {/* Hero Section */}
     <HeroSection/>

      {/* Features Section */}
    <Feacture/>

      {/* How It Works Section */}
    <Working/>
      {/* Testimonials Section */}
     <Testimonials/>
      {/* Footer */}
   <Footer/>
    </div>
  );
};

export default Landing;