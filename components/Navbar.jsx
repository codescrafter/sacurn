import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={`bg-transparent flex items-center justify-between pl-8.5 pr-10.5 ${className}`}
    >
      <Image src={"/images/navbar/sacurn-logo.svg"} width={192} height={39} />
      <div className="flex items-center">
        <nav>
          <ul className="flex items-center justify-between 2xl:space-x-18 space-x-9">
            {navArray.map((navItem) => (
              <li
                key={navItem.name}
                className={`${
                  router.pathname === navItem.path
                    ? "border-b border-white"
                    : ""
                }`}
              >
                <Link href={navItem.path}>
                  <p className="text-white">{navItem.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center 2xl:gap-9 gap-5 2xl:ml-17 ml-12">
          <Link href="/cart">
            <Image
              src={"/images/navbar/cart.svg"}
              className="2xl:w-9 w-7 2xl:h-9 h-7 cursor-pointer"
              width={35}
              height={34}
            />
          </Link>
          <Image
            src={"/images/navbar/member.svg"}
            className="2xl:w-10.5 2xl:h-10.5 w-8 h-8 cursor-pointer"
            width={42}
            height={42}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navArray = [
  {
    name: "首頁",
    path: "/",
  },
  {
    name: "全部商品",
    path: "/all-products",
  },
  {
    name: "最新消息",
    path: "/latest-news",
  },
  {
    name: "碳權趨勢",
    path: "/trend",
  },
  {
    name: "碳權庫存",
    path: "/inventory",
  },
];
