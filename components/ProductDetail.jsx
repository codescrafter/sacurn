import Image from "next/image";
import React from "react";
import AddedToCartModal from "./AddedToCartModal";

const ProductDetail = ({ productId }) => {
  const [openCartSuccessModal, setOpenCartSuccessModal] = React.useState(false);
  return (
    <div className="w-full mt-8 pl-4 relative">
      <h1 className="text-[44px] font-semibold leading-10">
        CarbonCure Concrete Mineralization
      </h1>
      <div className="flex justify-between w-full mb-6">
        <h3 className="text-[26px] leading-9">
          Project developed by CarbonCure Technologies
        </h3>
        <p className="text-xl font-light">
          價格由低至高排列
          <Image
            src={"/images/products-page/ic_arrow_down.svg"}
            alt="arrow-down"
            width={30}
            height={30}
            className="inline-block ml-2.5 w-7.5 h-7.5"
          />
        </p>
      </div>
      {/* table */}
      <div className="w-full">
        <div className="flex justify-between w-full py-2.5 border-b-2 border-white">
          <p
            className={`text-[18px] leading-9 font-normal text-left ml-3 w-1/6`}
          >
            價格
          </p>
          <p className={`text-[18px] leading-9 font-normal text-left w-1/6`}>
            會員編號
          </p>
          <p className={`text-[18px] leading-9 font-normal text-center w-1/6`}>
            可用數量
          </p>
          <p className={`text-[18px] leading-9 font-normal text-center w-1/6`}>
            最小單位
          </p>
          <p className={`text-[18px] leading-9 font-normal text-center w-1/6`}>
            訂購數量
          </p>
          <p
            className={`text-[18px] leading-9 font-normal text-right mr-3 w-1/6`}
          >
            加入購物車
          </p>
        </div>
        {/* table body  */}
        <div className="max-h-[65vh] overflow-scroll yellowScrollNoBg">
          {rowDetail.map((item) => (
            <div className="flex justify-between w-full py-6.2 border-b-2 border-opacity-30 border-white">
              <p
                key={item.id}
                className={`text-2xl leading-9 font-medium text-left ml-3 w-1/6`}
              >
                ${item.price}
              </p>
              <p
                key={item.id}
                className={`text-2xl leading-9 font-normal text-left w-1/6`}
              >
                {item.memberCode}
              </p>
              <div className="w-1/6 flex justify-center">
                <p
                  key={item.id}
                  className={`text-2xl leading-9 font-normal text-right`}
                >
                  {item.availableQuantity} 噸
                </p>
              </div>
              <div className="w-1/6 flex justify-end">
                <p
                  key={item.id}
                  className={`text-2xl leading-9 font-normal text-right mr-10`}
                >
                  {item.minimumUnit} 噸
                </p>
              </div>
              {/* + input - */}
              <div className="w-1/6 flex justify-end ml-5">
                <div className="flex justify-center gap-1.2 items-center">
                  <button className="w-7 h-7 rounded-full hover:bg-[#ffffff53] border-2 border-white">
                    <Image
                      src={"/images/products-page/ic_minus.svg"}
                      className="mx-auto"
                      alt="arrow-down"
                      width={13}
                      height={2}
                    />
                  </button>
                  <input
                    className="w-19 h-10 rounded-lg text-2xl bg-transparent text-pale-yellow font-normal text-center border-2 border-[#CBCBCB]"
                    type="text"
                    value="0"
                  />
                  <button className="w-7 h-7 rounded-full hover:bg-[#ffffff53] border-2 border-white">
                    <Image
                      src={"/images/products-page/ic_plus.svg"}
                      className="mx-auto"
                      alt="arrow-down"
                      width={13}
                      height={13}
                    />
                  </button>
                </div>
              </div>
              <div key={item.id} className={`w-1/6 flex justify-end mr-7`}>
                <Image
                  src={"/images/products-page/ic_add_to_cart.svg"}
                  alt="arrow-down"
                  width={50}
                  height={42}
                  className="cursor-pointer"
                  onClick={() => setOpenCartSuccessModal(true)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* cart success modal */}
      <AddedToCartModal
        open={openCartSuccessModal}
        setOpen={setOpenCartSuccessModal}
      />
    </div>
  );
};

export default ProductDetail;

const rowDetail = [
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
  {
    price: 500,
    memberCode: "mo12345678",
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0,
  },
];
