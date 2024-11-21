export default function Newfruits() {
  const newfruits = [
    { name: "Apple", price: 10, comment: "Reasonable" },
    { name: "Orange", price: 15, comment: "High" },
    { name: "Pineapple", price: 12, comment: "Moderate" },
  ];

  return (
    <div>
      {newfruits.map((fruit, i) => (
        <li key={i}>
          {fruit.name} price is ${fruit.price}. It is {fruit.comment}.
        </li>
      ))}
    </div>
  );
}
