import plus from "@/public/images/products-page/plus.svg";
import location from "@/public/images/products-page/locationsmall.svg";
import verified from "@/public/images/products-page/verified.svg";
import Image from "next/image";
import methodology from "@/public/images/products-page/methodology.svg";
import playbutton from "@/public/images/products-page/playbutton.svg";
import standard1 from "@/public/images/products-page/standard1.svg";
import standard2 from "@/public/images/products-page/standard2.svg";

function ProductDeatilView(props) {
  return (
    <div className="relative w-full flex flex-col mt-37">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="2xl:text-4.5xl xl:text-3.5xl lg:text-3.5xl">{product.name}</h1>
          <p className="2xl:text-2.5xl xl:text-1.5xl lg:text-1.5xl font-thin">{product.developer}</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex flex-row ">
            <div className="flex rounded-full bg-pale-yellow h-12.7 w-12.7 hover:cursor-pointer">
              <Image className="mx-auto" src={plus} />
            </div>
            <p className="text-pale-yellow ml-2 my-auto">購買</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-7.7 ">
        <div className="relative flex flex-col items-end 2xl:-translate-x-6 xl:-translate-x-4 lg:-translate-x-4">
          <div className="relative styledDiv py-5.2 2xl:px-17.7 xl:px-10 lg:px-10 items-center mb-4">
            <h1 className="2xl:text-3.5xl xl:text-2.5xl lg:text-2.5xl mb-3.2 font-medium">Profile</h1>
            <div className="flex flex-row mb-3">
              <Image className="mr-2.5" src={location} />
              <p className="text-base">{product.profile.country}</p>
            </div>
            <div className="flex flex-row">
              <Image className="mr-1.2" src={verified} />
              <p className="text-base">{product.profile.verification}</p>
            </div>
          </div>
          <div className="flex flex-col items-center py-4.7 2xl:pl-4 pl-0 2xl:pr-6.2 xl:pr-3.5 lg:pr-3.5 styledDiv">
            <Image className="mb-2.7" src={methodology} />
            <div className="text-right">
              <h1 className="2xl:text-3.5xl xl:text-2.5xl lg:text-2.5xl font-medium mb-2">Methodology</h1>
              <h3 className="2xl:text-2xl xl:text-1.5xl lg:text-1.5xl font-medium  mb-0.7">
                {product.methodology}
              </h3>
              <p className="2xl:w-59.2 xl:w-51 lg:w-51 text-base mb-2.5 font-thin">
                {product.methodology_explaination}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border border-white flex flex-col">
            <h1 className="2xl:text-3.5xl xl:text-3xl lg:text-3xl font-medium mt-6.2 ml-13 mb-3.5">
              About
            </h1>
            <div className="flex flex-row mb-8.2 mr-6.5">
              <div className="px-0.5 h-[60%] rounded-md bg-white ml-6.7 mr-4.2"></div>
              <p className="2xl:max-w-[640px] 2xl:w-auto xl:min-w-[400px] xl:max-w-[500px] xl:w-auto 2xl:text-2xl xl:text-xl lg:min-w-[400px] lg:max-w-[500px] lg:w-auto lg:text-xl">{product.about}</p>
            </div>
          </div>
          <div className="flex flex-row h-full w-full">
            <div className="flex flex-col border border-white mt-2.5">
              <Image className="2xl:mx-11.5 xl:mx-4.5 lg:mx-4.5 mt-4.7 hover:cursor-pointer" src={playbutton} />
              <p className="mx-auto 2xl:text-auto xl:text-sm mb-1.2">Watch Video</p>
            </div>
            <Image className="2xl:w-52 xl:w-52 lg:w-52 mx-auto" src={standard1} />
            <Image className="2xl:w-28 xl:w-28 lg:w-28 mx-auto" src={standard2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeatilView;

const product = {
  name: "CarbonCure Concrete Mineralization",
  developer: "Project developed by CarbonCure Technologies",
  methodology: "Soil carbon",
  methodology_explaination:
    "Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.",
  profile: { country: "Indonisia", verification: "Not verified" },
  about:
    "CarbonCure is an engineering technology company that is licensing its technology to cure CO2 into concrete production. CarbonCure sells its equipment, retrofitting manufacturers’ concrete plants. CarbonCure allows plants to be connected to a CO2 tank stored onsite and automatically injects a precise dosage of CO2 into the concrete during mixing.",
};
