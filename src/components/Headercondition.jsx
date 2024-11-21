import Header from "./Header";

export default function Headercondition({ display2 }) {
  if (display2) {
    return <Header />;
  } else {
    return <h3>Try again</h3>;
  }
}
