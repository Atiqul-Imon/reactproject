import Hello from "./components/Hello";
import Test from "./components/Test";
import City from "./components/City";
import Fruits from "./components/Fruits";
function App() {
  const person = {
    name: "Kate",
    message: "Hello",
    seatNumber: 122,
  };

  const car = {
    name: "Toyota",
    maxSpeed: 180,
  };

  const city = {
    cityName: "Dhaka",
    population: "2 corer",
  };

  return (
    <div className="App">
      <Hello person={person} />
      <Test car={car} />
      <City city={city} />
      <Fruits/>

    </div>
  );
}

export default App;
