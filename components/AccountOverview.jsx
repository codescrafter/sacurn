import UserCard from "./UserCard";

function AccountOverview(props) {
  return (
    <div className="flex flex-row">
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
    </div>
  );
}

export default AccountOverview;
