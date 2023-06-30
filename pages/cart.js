import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="bg-[#F6F6F6] h-screen overflow-hidden">
      <Navbar className={`pt-7 pb-2.5 !bg-navy-blue`} />
      <div className="flex justify-between my-4 pl-13 pr-10">
        <div className="flex">
          <button className="w-[202px] h-[46px] rounded-[3px] py-1 flex items-center justify-center border border-navy-blue text-navy-blue text-xl">
            <Image
              src={"/images/cart/ic_back.svg"}
              width={16}
              height={14}
              className="mr-2.5"
            />
            繼續購物
          </button>
          <div className="ml-4">
            <p className="text-[28px] font-normal text-navy-blue">| 購物車</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-2xl font-normal text-black mr-3">全部刪除</p>
          <Image src={"/images/cart/ic_delete.svg"} width={28} height={34} />
        </div>
      </div>
      <div className="flex">
        <div className="w-[65%] max-h-[85vh] px-4 pb-4 ml-7 overflow-scroll flex flex-col gap-5.5 yellowScrollNoBg scroll-left">
          {itemsList.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </div>
        <div className="h-[82vh] flex-1 mr-7 rounded-[10px] shadow-cart-item"></div>
      </div>
    </div>
  );
};

export default Cart;

const itemsList = [
  {
    img: "/images/cart/item1.png",
    memberCode: "會員代號：we12345678",
    heading: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    price: "$12,000/噸",
    left: "剩下 888 噸可購",
    total: "$120,000",
  },
  {
    img: "/images/cart/item2.png",
    memberCode: "會員代號：we12345678",
    heading: "CarbonCure Concrete Mineralization",
    price: "$12,000/噸",
    left: "剩下 888 噸可購",
    total: "$120,000",
  },
  {
    img: "/images/cart/item3.png",
    memberCode: "會員代號：we12345678",
    heading: "Andes Inorganic Soil Carbon",
    price: "$12,000/噸",
    left: "剩下 888 噸可購",
    total: "$120,000",
  },
  {
    img: "/images/cart/item1.png",
    memberCode: "會員代號：we12345678",
    heading: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    price: "$12,000/噸",
    left: "剩下 888 噸可購",
    total: "$120,000",
  },
  {
    img: "/images/cart/item2.png",
    memberCode: "會員代號：we12345678",
    heading: "CarbonCure Concrete Mineralization",
    price: "$12,000/噸",
    left: "剩下 888 噸可購",
    total: "$120,000",
  },
  {
    img: "/images/cart/item3.png",
    memberCode: "會員代號：we12345678",
    heading: "Andes Inorganic Soil Carbon",
    price: "$12,000/噸",
    left: "剩下 888 噸可購",
    total: "$120,000",
  },
];

const CartItem = ({ img, memberCode, heading, price, left, total }) => {
  const [rowSelected, setRowSelected] = React.useState(false);
  return (
    <div
      className={`flex items-center py-4.5 border-2 rounded-[10px] direction-ltr shadow-cart-item ${
        rowSelected
          ? "border-bright-blue bg-slight-blue"
          : "border-white bg-white"
      }`}
      onClick={() => setRowSelected((s) => !s)}
    >
      <div className="flex items-center">
        <div className="ml-7.5 mr-4">
          {rowSelected ? (
            <Image src={"/images/cart/ic_check.svg"} width={29} height={29} />
          ) : (
            <Image src={"/images/cart/ic_uncheck.svg"} width={29} height={29} />
          )}
        </div>

        <Image src={img} width={114} height={114} className="object-cover" />
        <div className="ml-6 flex flex-col justify-between h-full">
          <p className="text-[10.6px] font-medium text-black">{memberCode}</p>
          <p
            className={`font-bold text-xl leading-[18px] w-[316px] mr-3 mt-3 mb-3 ${
              rowSelected ? "text-bright-blue" : "text-black"
            }`}
          >
            {heading}
          </p>
          <p className="text-lg font-bold text-black">{price}</p>
        </div>
      </div>
      <div className="flex flex-1 justify-between">
        <p className="text-[15px] font-medium text-black leading-9">{left}</p>
        <div
          className="flex items-center gap-1.2"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="w-6 h-6 rounded-full border border-[#B3B4B4] text-black text-xl flex items-center justify-center">
            -
          </button>
          <input
            className="w-17 h-9 rounded-md border border-[#B3B4B4] bg-transparent text-right pr-3.5 text-bright-blue text-2xl font-medium flex items-center justify-center"
            type="text"
            value="1"
          />

          <button className="w-6 h-6 rounded-full border border-[#B3B4B4] text-black text-xl flex items-center justify-center">
            +
          </button>
        </div>

        <div className="">
          <p className="text-xl font-bold text-black">{total}</p>
        </div>
        <div className="">
          <Image
            src={"/images/cart/ic_delete.svg"}
            className="mr-7"
            width={23}
            height={27}
          />
        </div>
      </div>
    </div>
  );
};
