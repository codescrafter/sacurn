import React from "react";
import InfoBar from "@/components/InfoBar";
import Navbar from "@/components/Navbar";
import VerticalSlider from "@/components/VerticalSlider";
import Image from "next/image";
import HorizontalSlider from "@/components/HorizontalSlider";
import MultiSlideSlider from "@/components/MultiSlideSlider";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen bg-no-repeat bg-cover bg-[url('/images/landing-page/landing-page-bg.png')] h-screen">
      <div className="bg-dark-green invisible"></div>
      <Navbar className="pt-4 mb-9.5" />
      <InfoBar />
      <div className="flex justify-between ml-[4.3%] mt-2.5 gap-[5.9%]">
        <div className="relative w-[54%] max-h-[418px] bg-black bg-opacity-[0.15]">
          <VerticalSlider />
        </div>
        <div className="mt-9 flex-1 overflow-hidden">
          <p className="flex">
            <Image
              src={"/images/landing-page/ic_volume.svg"}
              width={32}
              height={30}
            />
            <span className="font-semibold text-[30px] leading-9 ml-3">
              最新消息
            </span>
          </p>
          <HorizontalSlider />
          <p className="flex mt-7.5 mb-4">
            <Image
              src={"/images/landing-page/ic_book.svg"}
              width={29}
              height={33}
            />
            <span className="font-semibold text-[30px] leading-9 ml-3">
              碳權趨勢
            </span>
          </p>
          <MultiSlideSlider />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
