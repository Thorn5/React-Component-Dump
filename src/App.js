import "./App.css";
import Lift_the_State from "./Components/Lift_the_State";
import ButtonHost from "./Components/ButtonHost";
import ArrayComponent from "./Components/ArrayComponent";

export default function App() {
  return (
    <div className="App">
      <Lift_the_State />
      <hr />
      <ButtonHost />
      <hr />
      <ArrayComponent />
    </div>
  );
}
