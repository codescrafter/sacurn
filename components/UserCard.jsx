import Image from "next/image";
import Card from "./Card";

const UserCard = (props) => {
  return (
    <Card className={props.className}>
      <h1 className="2xl:mt-7.5 xl:mt-5 mt-4 2xl:mb-4.2 xl:mb-3 mb-2 2xl:mx-15 xl:mx-12 mx-10 2xl:text-xl xl:text-base text-sm 2xl:font-bold xl:font-semibold font-semibold text-navy-blue">
        {props.accType}
      </h1>
      <div className="flex flex-col relative w-max">
        <Image
          className={`2xl:border-4 xl:border-3 border-2 rounded-full border-navy-blue 2xl:w-21.2 xl:w-16 w-12 2xl:h-21.2 xl:h-16 h-12`}
          src={require("@/public/images/membership-center/profile.png")}
        />
        <div
          className={`relative bg-${
            props.active ? "dark-green" : "silverstone"
          } 2xl:border-5 xl:border-4 border-3 2xl:w-6.5 xl:w-4.7 w-4 2xl:h-6.5 xl:h-4.7 h-4 self-end rounded-full 2xl:right-1 xl:right-1 right-1 2xl:bottom-6 xl:bottom-4 bottom-3 shadow-online-dot`}
        ></div>
      </div>
      <h1 className="2xl:text-xl xl:text-base text-sm 2xl:-mt-5 xl:-mt-3 -mt-2 font-semibold 2xl:mb-2.5 xl:mb-1.5 mb-1 text-black ">
        {props.name}
      </h1>
      <p className="2xl:text-sm xl:text-xs text-xms 2xl:mb-6 xl:mb-4.5 mb-3.5 text-dark-grey">{props.email}</p>
      <ProfileButton className="2xl:mb-11.5 xl:mb-7 mb-5" />
    </Card>
  );
};

const ProfileButton = (props) => {
  return (
    <button
      className={`2xl:px-4 xl:px-3 px-2 2xl:py-1.5 xl:py-0.7 py-0.5 border border-grey  rounded-md ${props.className}`}
    >
      <div className="flex flex-row items-center">
        <Image
          className="2xl:pr-2 xl:m-1.2 m-0.7 2xl:w-5 xl:w-3 w-2 2xl:h-5 xl:h-3 h-2"
          src={require("@/public/images/membership-center/view-profile-icon.png")}
        />
        {props.children != null ? (
          <p className="text-grey 2xl:text-sm xl:text-xs text-xms">{props.children}</p>
        ) : (
          <p className="text-grey 2xl:text-sm xl:text-xs text-xms">Profile</p>
        )}
      </div>
    </button>
  );
};

export default UserCard;
