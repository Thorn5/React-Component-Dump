import "./App.css";
import LiftTheState from "./Components/LiftTheState";
import ButtonHost from "./Components/ButtonHost";
import ArrayComponent from "./Components/ArrayComponent";
import RecipeUseFetch from "./Components/RecipeUseFetch";

// console.log(RecipeArray);

const App = () => {
  return (
    <div className="App">
      <LiftTheState />
      <hr />
      <ButtonHost />
      <hr />
      <ArrayComponent />
      <hr />
      <RecipeUseFetch />
    </div>
  );
}

export default App

// Next API:
// https://official-joke-api.appspot.com/random_ten