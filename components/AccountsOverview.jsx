import Card from "./Card";
import UserCard from "./UserCard";
import Image from "next/image";

function AccountsOverview(props) {
  return (
    <div className="flex flex-row flex-wrap gap-12.2 ">
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
          className="mt-21 hover:cursor-pointer"
          src={require("@/public/images/membership-center/adduser.png")}
        />
        <h1 className="2xl:mt-7.5 2xl:mb-6.2 2xl:mx-15 2xl:text-sm 2xl:font-bold  text-navy-blue">
          新增使用者
        </h1>
      </Card>
      <Card>
        <Image
          className="mt-21 hover:cursor-pointer"
          src={require("@/public/images/membership-center/adduser.png")}
        />
        <h1 className="2xl:mt-7.5 2xl:mb-6.2 2xl:mx-15 2xl:text-sm 2xl:font-bold  text-navy-blue">
          新增使用者
        </h1>
      </Card>
      <Card>
        <Image
          className="mt-21 hover:cursor-pointer"
          src={require("@/public/images/membership-center/adduser.png")}
        />
        <h1 className="2xl:mt-7.5 2xl:mb-6.2 2xl:mx-15 2xl:text-sm 2xl:font-bold  text-navy-blue">
          新增使用者
        </h1>
      </Card>
    </div>
  );
}

export default AccountsOverview;
