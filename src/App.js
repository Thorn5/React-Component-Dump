import "./App.css";
import LiftTheState from "./Components/LiftTheState";
import ButtonHost from "./Components/ButtonHost";
import ArrayComponent from "./Components/ArrayComponent";
import RecipeArray from "./Components/RecipeArray";
import ImplementUseFetch from "./Components/ImplementUseFetch";

export default function App() {
  console.log(RecipeArray);
  return (
    <div className="App">
      <LiftTheState />
      <hr />
      <ButtonHost />
      <hr />
      <ArrayComponent />
      <hr />
      <ImplementUseFetch />
    </div>
  );
}

