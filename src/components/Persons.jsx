import Person from "./Person";

export default function Persons() {
  const person = [
    { name: "Sifia", city: "California", occupation: "Dancer" },
    { name: "Priyanka", city: "Mumbai", occupation: "Actress" },
    { name: "Camelia", city: "Havana", occupation: "Singer" },
  ];

  return (
    <div>
      {person.map((pers, index) => (
        <Person
          key={index} // Unique key for each item in the list
          name={pers.name}
          city={pers.city}
          occupation={pers.occupation}
        />
      ))}
    </div>
  );
}
