import User from "./User";

export default function Usercart() {
  const userCart = [
    { userName: "Rahul", userId: 1, userLocation: "Dhaka" },

    { userName: "Robi", userId: 2, userLocation: "Kathmandu" },

    { userName: "Apurba", userId: 3, userLocation: "Sylhet" },

    { userName: "Michale", userId: 4, userLocation: "Moscow" },
  ];

  return (
    <div>
      <ul>
        {userCart.map((user, ind) => (
          <User
            key={ind}
            userName={user.userName}
            userId={user.userId}
            userLocation={user.userLocation}
          />
        ))}
      </ul>
    </div>
  );
}
