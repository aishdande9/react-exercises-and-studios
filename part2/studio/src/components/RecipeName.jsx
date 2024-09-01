import recipedata from "./recipe.json";

function RecipeName() {

  return recipedata.map(
    (data,id) => <h1 key={id}>{data.name}</h1>
  );
}

export default RecipeName;


//import return the name of the recipe as a level 1 header