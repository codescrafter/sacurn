import Image from "next/image";
import product1 from "@/public/images/products-page/product1.png"
import product2 from "@/public/images/products-page/product2.png"
import product3 from "@/public/images/products-page/product3.png"
import downloadPic from "@/public/images/products-page/download.svg"
import locationPic from "@/public/images/products-page/location.svg"

function ProductsListView(props) {
  return (
    <div className="bg-transparent flex flex-col">
      {products.map((product,index) => {
        return (
          <div className={`bg-white rounded-3xl px-4 py-5 flex flex-row ${index!=0 && index!=(products.length-1) ? "my-4.5": index==0 ? "mb-4.5":"mt-4.5"}`}>
            <div className={`p-1 rounded-2xl  bg-${color_boundary[index%color_boundary.length]}`}>
              <Image className="h-47.2 w-74.7 rounded-2xl " src={product.imagePath}/>
            </div>
            <div className="flex flex-col ml-3.7">
              <h1 className="text-black text-3xl font-semibold">{product.name}</h1>
              <h3 className="text-slate-blue-grey text-xl font font-semibold">{product.projectby}</h3>
              <div className="flex flex-row mt-1">
                <div className="bg-light-grey rounded-3xl pl-3.7 pr-5.7 py-0.5 flex flex-row">
                  <p className="text-medium-grey mr-2.5">{product.type}</p>
                  <Image src={downloadPic}/>
                </div>
                <div className="flex flex-row ml-4.5">
                  <Image className="mr-1.2" src={locationPic}/>
                  <p className="text-soft-red font-semibold my-auto">{product.location}</p>
                </div>
              </div>
              <div className="flex flex-col h-full justify-end">
                <p className="text-black">{product.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsListView;

const color_boundary = ["pale-yellow", "navy-blue", "dark-green"];

const products = [
  {
    name: "CarbonCure Concrete Mineralization",
    projectby: "Project developed by CarbonCure Technologies",
    type: "carbon removal",
    location: "Indonisia",
    description:
      "Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.",
    imagePath: product1,
  },
  {
    name: "Andes Inorganic Soil Carbon",
    projectby: "Project developed by CarbonCure Technologies",
    type: "carbon avoidance",
    location: "Indonisia",
    description:
      "Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.",
    imagePath: product2,
  },
  {
    name: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    projectby: "Project developed by CarbonCure Technologies",
    type: "carbon removal",
    location: "Indonisia",
    description:
      "Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.",
    imagePath: product3,
  },
];
