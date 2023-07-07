import Navbar from "@/components/Navbar";
import Image from "next/image";

function membershipCenter() {
  return (
    <div className="relative w-screen h-screen bg-cover bg-membership-center">
      <Navbar className={`relative !bg-navy-blue 2xl:mb-6 mb-5 h-17.5`} />
      <h1 className="relative text-white text-2.5xl translate-y-1.5 translate-x-7.5 w-max">
        | 會員中心
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <UserCard name={"管理者"} active={true} />
        </div>
      </div>
    </div>
  );
}

export default membershipCenter;

const UserCard = (props) => {
  return (
    <div className={`rounded-mdlg bg-white flex flex-col 2xl:w-76.2 2xl:h-79 items-center`}>
      <h1 className="2xl:mt-7.5 2xl:mb-6.2 2xl:mx-15 2xl:text-xl 2xl:font-bold  text-navy-blue">
        {props.accType}
      </h1>
      <div className="flex flex-col relative w-max">
        <Image
          className={`2xl:border-6 rounded-full border-navy-blue 2xl:w-21.2 2xl:h-21.2`}
          src={require("@/public/images/membership-center/profile.png")}
        />
        <div
          className={`relative bg-${
            props.active ? "dark-green" : "snowflake-grey"
          } 2xl:border-5 2xl:w-6.5 2xl:h-6.5 self-end rounded-full 2xl:right-1 2xl:bottom-6 shadow-online-dot`}
        ></div>
      </div>
      <h1 className="2xl:text-xl 2xl:font-semibold 2xl:mb-2.5 text-black ">{props.name}</h1>
      <p className="2xl:text-sm 2xl:mb-7.7 text-dark-grey">{props.email}</p>
      <ProfileButton />
    </div>
  );
};

const ProfileButton = (props) => {
  return (
    <button className="2xl:p-2.5 border border-grey  rounded-md">
      <div className="flex flex-row">
        <Image
          src={"/images/membership-center/view-profile-icon.png"}
          width={9}
          height={10}
        />
        {props.children!=null ? <p className="text-grey text-sm">{props.children}</p> : <p className="text-grey text-sm">Profile</p>}
      </div>
    </button>
  );
};


const currentUsers=[
    {
        'accType':'',
        'name':'',
        'email':'',
        'active':'',
    }

]