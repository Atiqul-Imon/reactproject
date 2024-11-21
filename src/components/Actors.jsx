export default function Actors() {
  const actors = ["Shahrukh", "Ajay", "Salman", "Akshay"];
  return (
    <div>
      <ol>
        {actors.map((actor, i) => (
          <li key={i}>{actor}</li>
        ))}
      </ol>
    </div>
  );
}
