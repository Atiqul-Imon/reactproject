export default function Clothes() {
  const clothes = [
    { clothName: "Pant", clothId: 1, price: 300, sold: true },
    { clothName: "Shari", clothId: 2, price: 800, sold:false },
    { clothName: "Shirt", clothId: 3, price: 600, sold: true },
    { clothName: "Jacket", clothId: 4, price: 1200, sold:true },
    { clothName: "Kurta", clothId: 5, price: 250, sold: false },
  ];

  return (
    <div>
      <ul>
        {clothes.map((cloth, ind) => (
          <li key={ind}>
            Product name: {cloth.clothName}, Product Id: {cloth.clothId},
            Product Price: BDT{cloth.price} {(cloth.sold? "Sold out": "Available")}
          </li>
        ))}
      </ul>
    </div>
  );
}
