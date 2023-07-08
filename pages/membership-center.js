import Navbar from "@/components/Navbar";
import AccountOverview from "@/components/AccountOverview";
import Image from "next/image";

function membershipCenter() {
  return (
    <div className="relative w-screen h-screen bg-cover bg-membership-center">
      <Navbar className={`relative !bg-navy-blue 2xl:mb-6 mb-5 h-17.5`} />
      <h1 className="relative text-white text-2.5xl translate-y-1.5 translate-x-7.5 w-max">
        | 會員中心
      </h1>
      <div className="flex flex-row 2xl:ml-15.7">
        <div className="flex flex-col items-center 2xl:mt-7.3 bg-white 2xl:h-[78vh] 2xl:w-[500px] rounded-mdlg">
          <h1 className="text-2xl font-semibold text-navy-blue 2xl:mt-31.5 2xl:mb-5">艾克斯厚定股份有限公司</h1>
          <Image className="2xl:h-42.2 2xl:w-42.2" src={require('@/public/images/membership-center/noprofile.png')}/>
          <h1 className="text-2xl text-black font-semibold 2xl:mt-8 2xl:mb-5.5">X Holdings</h1>
          <h1 className="text-2xl font-semibold text-pale-yellow">VVIP</h1>
          <div className="relative bg-pale-yellow 2xl:w-51 2xl:h-4.7 2xl:mt-2.5 p-0.7 rounded-3xl">
            <div className={`bg-navy-blue h-full w-[${String(70)}%] rounded-3xl`}></div>
          </div>
          <h1 className="text-2xl 2xl:mt-2 text-dark-grey">{15000}/50,000</h1>
          <h1 className="text-2xl 2xl:mt-2 font-semibold text-navy-blue">可買賣會員</h1>
          <h1 className="text-2xl 2xl:mt-2 text-dark-grey">2023.12.31到期</h1>
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
