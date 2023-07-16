import { useState } from "react";
import Navbar from "@/components/Navbar";
import AccountsOverview from "@/components/AccountsOverview";
import Image from "next/image";
import MembershipCard from "@/components/MembershipCard";

function membershipCenter() {
  const [active, setActive] = useState("會員卡");
  return (
    <div className="relative w-screen h-screen bg-cover bg-membership-center">
      <Navbar className={`relative !bg-navy-blue 2xl:mb-6 xl:mb-5.5 mb-5 2xl:h-17.5 xl:h-14`} />
      <h1 className="relative text-white 2xl:text-2.5xl xl:text-xl 2xl:translate-y-1.5 2xl:translate-x-7.5 xl:translate-x-5 w-max">
        | 會員中心
      </h1>
      <div className="flex flex-row justify-between 2xl:ml-15.7 xl:ml-11">
        <div className="flex flex-col items-center 2xl:mt-7.3 xl:mt-5 bg-white 2xl:h-[80vh] xl:h-[78vh] min-[1700px]:min-w-[500px] min-[1600px]:min-w-[475px] 2xl:min-w-[450px] min-[1450px]:min-w-[435px] min-[1350px]:min-w-[400px] xl:min-w-[375px] rounded-mdlg">
          <h1 className="2xl:text-2xl xl:text-lg font-semibold text-navy-blue 2xl:mt-31.5 xl:mt-18 2xl:mb-5 xl:mb-4">
            艾克斯厚定股份有限公司
          </h1>
          <Image
            className="2xl:h-42.2 xl:h-32 2xl:w-42.2 xl:w-32"
            src={require("@/public/images/membership-center/noprofile.png")}
          />
          <h1 className="2xl:text-2xl xl:text-lg text-black font-semibold 2xl:mt-8 xl:mt-3.7 2xl:mb-5.5 xl:mb-4">
            X Holdings
          </h1>
          <h1 className="2xl:text-2xl xl:text-lg font-semibold text-pale-yellow">VVIP</h1>
          <div className="relative bg-pale-yellow 2xl:w-51 xl:w-36 2xl:h-4.7 xl:h-3.7 2xl:mt-2.5 xl:mt-2 p-0.7 rounded-3xl">
            <div
              className={`bg-navy-blue h-full w-[${String(70)}%] rounded-3xl`}
            ></div>
          </div>
          <h1 className="2xl:text-2xl xl:text-lg 2xl:mt-2 xl:mt-2 text-dark-grey">{15000}/50,000</h1>
          <h1 className="2xl:text-2xl xl:text-lg 2xl:mt-2 xl:mt-1 font-semibold text-navy-blue">
            可買賣會員
          </h1>
          <h1 className="2xl:text-2xl xl:text-lg 2xl:mt-2 xl:mt-1 text-dark-grey">2023.12.31到期</h1>
        </div>
        <div className="flex flex-col w-full 2xl:mr-10.5 xl:mr-7.5 2xl:-mt-3 xl:-mt-3">
          <div className="flex flex-row border-b 2xl:ml-15.5 xl:ml-13 2xl:mr-4.7 xl:mr-3 border-b-white w-auto">
            {tabs.map((tab) => {
              return (
                <div
                  className={`${
                    active == tab ? "border-b-2 text-pale-yellow" : "border-b-0"
                  } border-b-pale-yellow mr-9 cursor-pointer 2xl:text-lg xl:text-sm h-[calc(100%+1px)]`}
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
            <div className="yellowScrollWhiteBg min-[1452px]:ml-13 2xl:ml-13.2 xl:ml-10 w-auto 2xl:h-[75vh] xl:h-[75vh] overflow-scroll overflow-x-hidden 2xl:pr-5 2xl:mt-11.7 xl:mt-8">
              <AccountsOverview users={currentUsers} />
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
