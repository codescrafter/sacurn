import Card from "./Card";
import UserCard from "./UserCard";
import Image from "next/image";

function AccountsOverview(props) {
  return (
    <div className="grid grid-cols-3 min-[1700px]:gap-12.2 min-[1600px]:gap-8 2xl:gap-7.5 2xl:mr-5 xl:gap-6">
      {props.users.map((user) => {
        return (
          <div>
            <UserCard
              accType={user.accType}
              name={user.name}
              active={user.active}
              email={user.email}
            />
          </div>
        );
      })}
      <Card>
        <Image
          className="2xl:mt-21 xl:mt-16 2xl:w-26.2 xl:w-18 2xl:h-26.2 xl:h-18 hover:cursor-pointer"
          src={require("@/public/images/membership-center/adduser.png")}
        />
        <h1 className="2xl:mt-7.5 xl:mt-5 2xl:mb-6.2 2xl:mx-15 2xl:text-sm xl:text-xs 2xl:font-bold  text-navy-blue">
          新增使用者
        </h1>
      </Card>
    </div>
  );
}

export default AccountsOverview;
