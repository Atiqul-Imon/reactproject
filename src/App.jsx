import Hello from "./components/Hello";
import Test from "./components/Test";
import City from "./components/City";
import Fruits from "./components/Fruits";
import Players from "./components/Players";
import Actors from "./components/Actors";
import Newfruits from "./components/Newfruits";
import Persons from "./components/Persons";
import Usercart from "./components/Usercart";
import Header from "./components/Header";
import Conditional from "./components/Conditional";
import Footer from "./components/Footer";
import LogInOut from "./components/LogInOut";

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
    <div>
      <div>
        <Header />
      </div>

      <div className="container">
        <LogInOut />
        <Hello person={person} />
        <Test car={car} />
        <City city={city} />
        <Fruits />
        <Players />
        <Actors />
        <Newfruits />
        <Persons />
        <Usercart />
        <Conditional />
        <Footer />
      </div>
    </div>
  );
}

export default App;
