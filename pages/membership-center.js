import { useState } from "react";
import Navbar from "@/components/Navbar";
import AccountOverview from "@/components/AccountsOverview";
import Image from "next/image";
import MembershipCard from "@/components/MembershipCard";

function membershipCenter() {
  const [active, setActive] = useState("會員卡");
  return (
    <div className="relative w-screen h-screen bg-cover bg-membership-center">
      <Navbar className={`relative !bg-navy-blue 2xl:mb-6 mb-5 h-17.5`} />
      <h1 className="relative text-white text-2.5xl translate-y-1.5 translate-x-7.5 w-max">
        | 會員中心
      </h1>
      <div className="flex flex-row justify-between 2xl:ml-15.7">
        <div className="flex flex-col items-center 2xl:mt-7.3 bg-white 2xl:h-[80vh] 2xl:min-w-[500px] rounded-mdlg">
          <h1 className="text-2xl font-semibold text-navy-blue 2xl:mt-31.5 2xl:mb-5">
            艾克斯厚定股份有限公司
          </h1>
          <Image
            className="2xl:h-42.2 2xl:w-42.2"
            src={require("@/public/images/membership-center/noprofile.png")}
          />
          <h1 className="text-2xl text-black font-semibold 2xl:mt-8 2xl:mb-5.5">
            X Holdings
          </h1>
          <h1 className="text-2xl font-semibold text-pale-yellow">VVIP</h1>
          <div className="relative bg-pale-yellow 2xl:w-51 2xl:h-4.7 2xl:mt-2.5 p-0.7 rounded-3xl">
            <div
              className={`bg-navy-blue h-full w-[${String(70)}%] rounded-3xl`}
            ></div>
          </div>
          <h1 className="text-2xl 2xl:mt-2 text-dark-grey">{15000}/50,000</h1>
          <h1 className="text-2xl 2xl:mt-2 font-semibold text-navy-blue">
            可買賣會員
          </h1>
          <h1 className="text-2xl 2xl:mt-2 text-dark-grey">2023.12.31到期</h1>
        </div>
        <div className="flex flex-col w-full 2xl:mr-10.5 2xl:-mt-3">
          <div className="flex flex-row border-b 2xl:ml-15.5 2xl:mr-4.7 border-b-white w-auto">
            {tabs.map((tab) => {
              return (
                <div
                  className={`${
                    active == tab ? "border-b-2 text-pale-yellow" : "border-b-0"
                  } border-b-pale-yellow mr-9 cursor-pointer text-lg h-[calc(100%+1px)]`}
                  onClick={() => {
                    setActive(tab);
                  }}
                >
                  {tab}
                </div>
              );
            })}
          </div>
          {active=="會員卡" && <MembershipCard/>} 
          {active == "企業帳號總覽" && (
            <div className="yellowScrollWhiteBg flex flex-col ml-13.2 w-auto h-[75vh] overflow-scroll overflow-x-hidden 2xl:mt-11.7">
              <AccountOverview users={currentUsers} />
            </div>
          )}
        </div>
      </div>
      {/* <AccountOverview users={currentUsers}/> */}
    </div>
  );
}

export default membershipCenter;

const currentUsers = [
  {
    accType: "管理者",
    name: "Belinda",
    email: "will.emmett@google.com",
    picture: "",
    active: true,
  },
  {
    accType: "可挑選者",
    name: "Grimes",
    email: "grimes_musk@google.com",
    active: true,
  },
  {
    accType: "可挑選者",
    name: "Christina",
    email: "will.emmett@google.com",
    active: false,
  },
  {
    accType: "可付款者",
    name: "Diana",
    email: "will.emmett@google.com",
    active: true,
  },
  {
    accType: "可下單者",
    name: "Eason",
    email: "will.emmett@google.com",
    active: false,
  },
];

const tabs = ["會員卡", "企業帳號總覽", "碳循環點數"];
