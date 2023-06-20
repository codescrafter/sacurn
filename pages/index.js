import React from "react";
import InfoBar from "@/components/InfoBar";
import Navbar from "@/components/Navbar";
import VerticalSlider from "@/components/VerticalSlider";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen bg-no-repeat bg-cover bg-[url('/images/landing-page/landing-page-bg.png')] h-screen">
      <Navbar className="pt-4 mb-9.5" />
      <InfoBar />
      {/* h-[43%] */}
      <div className="relative w-[54%]  max-h-[418px] bg-black bg-opacity-[0.15] ml-19">
        <VerticalSlider />
      </div>
    </div>
  );
};

export default LandingPage;
