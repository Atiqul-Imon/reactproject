export default function User({ userName, userId, userLocation }) {
  return (
    <div>
      <li>
        {userId} {userName} {userLocation}
      </li>
    </div>
  );
}
