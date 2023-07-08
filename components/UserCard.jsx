import Image from "next/image";
import Card from "./Card";

const UserCard = (props) => {
  return (
    <Card>
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
            props.active ? "dark-green" : "silverstone"
          } 2xl:border-5 2xl:w-6.5 2xl:h-6.5 self-end rounded-full 2xl:right-1 2xl:bottom-6 shadow-online-dot`}
        ></div>
      </div>
      <h1 className="2xl:text-xl 2xl:-mt-5 2xl:font-semibold 2xl:mb-2.5 text-black ">
        {props.name}
      </h1>
      <p className="2xl:text-sm 2xl:mb-7.7 text-dark-grey">{props.email}</p>
      <ProfileButton className="mb-11.5" />
    </Card>
  );
};


const ProfileButton = (props) => {
    return (
      <button className={`2xl:px-4 2xl:py-1.5 border border-grey  rounded-md ${props.className}`}>
        <div className="flex flex-row items-center">
          <Image
            className="pr-2"
            src={require("@/public/images/membership-center/view-profile-icon.png")}
            width={20}
            height={12}
          />
          {props.children != null ? (
            <p className="text-grey text-sm">{props.children}</p>
          ) : (
            <p className="text-grey text-sm">Profile</p>
          )}
        </div>
      </button>
    );
  };
  


export default UserCard;
