import React , {useState} from "react";
import RecipeArray from "../ApiData/RecipeArray";
// import useFetch from "./useFetch";

const RecipeUseFetch = () => {
  // const url ="https://cdn.contentful.com/spaces/75958qusqnzq/environments/master/entries" + process.env.REACT_APP_API_ACCESS_TOKEN;
  // const { data, loading, error } = useFetch(url);
  //! preserve API, fake call
  const data = RecipeArray
  const loading = false
  const error = null
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  // console.log(data);
  
  function handleSelectionChange(event) {
    const selectedRecipeIndex = parseInt(event.target.value);
    const selectedRecipe = data.items[selectedRecipeIndex];
    setSelectedRecipe(selectedRecipe);
  }

  

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        `${error}`
      ) : (
        <div>
          <form>
            {data.items.map((item, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="recipe"
                    value={index}
                    onChange={handleSelectionChange}
                  />
                  {item.fields.recipeName}
                </label>
              </div>
            ))}
          </form>
        </div>
      )}
      {selectedRecipe && (
        <div>
          <h1>{selectedRecipe.fields.recipeName}</h1>
          <h3> {selectedRecipe.fields.description} </h3>
          <p>Ingredients:</p>
          <ul>
            {selectedRecipe.fields.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>Method:</p>
          <ul>
            {selectedRecipe.fields.method.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

};

export default RecipeUseFetch;
