import Image from "next/image";
import Card from "./Card";

const UserCard = (props) => {
  return (
    <Card className={props.className}>
      <h1 className="2xl:mt-7.5 xl:mt-5 2xl:mb-4.2 xl:mb-3 2xl:mx-15 xl:mx-12 2xl:text-xl xl:text-base 2xl:font-bold xl:font-semibold text-navy-blue">
        {props.accType}
      </h1>
      <div className="flex flex-col relative w-max">
        <Image
          className={`2xl:border-4 xl:border-3 rounded-full border-navy-blue 2xl:w-21.2 xl:w-16 2xl:h-21.2 xl:h-16`}
          src={require("@/public/images/membership-center/profile.png")}
        />
        <div
          className={`relative bg-${
            props.active ? "dark-green" : "silverstone"
          } 2xl:border-5 xl:border-4 2xl:w-6.5 xl:w-4.7 2xl:h-6.5 xl:h-4.7 self-end rounded-full 2xl:right-1 xl:right-1 2xl:bottom-6 xl:bottom-4 shadow-online-dot`}
        ></div>
      </div>
      <h1 className="2xl:text-xl xl:text-base 2xl:-mt-5 xl:-mt-3 2xl:font-semibold xl:font-semibold 2xl:mb-2.5 xl:mb-1.5 text-black ">
        {props.name}
      </h1>
      <p className="2xl:text-sm xl:text-xs 2xl:mb-6 xl:mb-4.5 text-dark-grey">{props.email}</p>
      <ProfileButton className="2xl:mb-11.5 xl:mb-7" />
    </Card>
  );
};

const ProfileButton = (props) => {
  return (
    <button
      className={`2xl:px-4 xl:px-3 2xl:py-1.5 xl:py-0.7 border border-grey  rounded-md ${props.className}`}
    >
      <div className="flex flex-row items-center">
        <Image
          className="2xl:pr-2 xl:m-1.2 2xl:w-5 xl:w-3 2xl:h-5 xl:h-3"
          src={require("@/public/images/membership-center/view-profile-icon.png")}
        />
        {props.children != null ? (
          <p className="text-grey 2xl:text-sm xl:text-xs">{props.children}</p>
        ) : (
          <p className="text-grey 2xl:text-sm xl:text-xs">Profile</p>
        )}
      </div>
    </button>
  );
};

export default UserCard;
