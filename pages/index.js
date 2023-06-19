import React from "react";
import InfoBar from "@/components/InfoBar";
import Navbar from "@/components/Navbar";
// import CustomSlider from "@/components/CustomSlider";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen bg-no-repeat bg-cover bg-[url('/images/landing-page/landing-page-bg.png')] h-screen">
      <Navbar className="pt-4 mb-9.5" />
      <InfoBar />
      <div className="relative w-[54%] h-[43%] bg-black bg-opacity-[0.15] ml-19">
        {/* <CustomSlider verticalBullets={true} /> */}
      </div>
    </div>
  );
};

export default LandingPage;
