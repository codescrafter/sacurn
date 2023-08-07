
function ProductsListView({ setSelectedProductId }) {
  return (
    <div className="bg-transparent flex flex-col gap-4.5 max-h-[75vh]">
      {products.map((product, index) => {
        return (
          <div
            className={`bg-white rounded-3xl 2xl:px-4 2xl:py-5 px-3 py-3.5 flex flex-row cursor-pointer`}
            onClick={() => setSelectedProductId(product.id)}
          >
            <div className={`p-1 rounded-2xl`}>
              <img
                className="2xl:h-47.2 2xl:w-74.7 h-40 w-64 rounded-2xl object-cover"
                src={product.imagePath}
              />
            </div>
            <div className="flex flex-col ml-3.7">
              <h1 className="text-black 2xl:text-3xl text-2xl font-semibold">
                {product.name}
              </h1>
              <h3 className="text-slate-blue-grey 2xl:text-xl text-lg font font-semibold">
                {product.projectby}
              </h3>
              <div className="flex flex-row mt-1">
                <div className="bg-light-grey rounded-3xl 2xl:pl-3.7 pl-2.5 2xl:pr-5.7 pr-4.5 py-0.5 flex flex-row">
                  <p className="text-medium-grey 2xl:mr-2.5 mr-1.5">
                    {product.type}
                  </p>
                  <img src={"/images/products-page/download.svg"} />
                </div>
                <div className="flex flex-row ml-4.5">
                  <img className="mr-1.2" src={"/images/products-page/location.svg"} />
                  <p className="text-soft-red font-semibold my-auto">
                    {product.location}
                  </p>
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
    id: 1,
    name: "CarbonCure Concrete Mineralization",
    projectby: "Project developed by CarbonCure Technologies",
    type: "carbon removal",
    location: "Indonisia",
    description:
      "Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.",
    imagePath: "/images/products-page/product1.png",
  },
  {
    id: 2,
    name: "Andes Inorganic Soil Carbon",
    projectby: "Project developed by CarbonCure Technologies",
    type: "carbon avoidance",
    location: "Indonisia",
    description:
      "Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.",
    imagePath: "/images/products-page/product2.png",
  },
  {
    id: 3,
    name: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    projectby: "Project developed by CarbonCure Technologies",
    type: "carbon removal",
    location: "Indonisia",
    description:
      "Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.",
    imagePath: "/images/products-page/product3.png",
  },
  {
    id: 4,
    name: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    projectby: "Project developed by CarbonCure Technologies",
    type: "carbon removal",
    location: "Indonisia",
    description:
      "Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.",
    imagePath: "/images/products-page/product3.png",
  },
];
