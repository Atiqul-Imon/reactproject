export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Dragon"];

  return (
    <div>
      <ul>
        {fruits.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
