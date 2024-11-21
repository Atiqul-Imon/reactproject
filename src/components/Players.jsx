export default function Players() {
  const players = ["Mashrafee", "Shakib", "Tamim", "Mushfiq", "Riad"];
  return (
    <div>
     {players.map((player, i)=>( 
        <h5 key={i}>{player}</h5>
     ))}
    </div>
  );
}
