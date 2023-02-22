import "./App.css";
import LiftTheState from "./Components/LiftTheState";
import ButtonHost from "./Components/ButtonHost";
import ArrayComponent from "./Components/ArrayComponent";

export default function App() {
  return (
    <div className="App">
      <LiftTheState />
      <hr />
      <ButtonHost />
      <hr />
      <ArrayComponent />
    </div>
  );
}
