import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import mainPic from "@/public/images/products-page/group-693.png";
import ViewStyleBar from "@/components/ViewStyleBar";

function AllProducts(props) {
  return (
    <div className="w-screen relative min-h-screen bg-no-repeat bg-cover bg-[url('/images/products-page/cover.png')] h-screen">
      <Navbar className={`pt-4 mb-9.5 relative z-30`} />
      <div className="h-full w-full absolute flex flex-row justify-start top-0 left-0">
        <div>
          <Image className="h-full w-auto" src={mainPic} />
        </div>
        <div className="flex flex-col mt-20">
          <div className="flex flex-row">
            <ViewStyleBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
