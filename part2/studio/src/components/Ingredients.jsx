
import recipedata from "./recipe.json";
function IngredientList() {
     return recipedata.map(
      (data,id) =><div><h1>IngredientsList</h1>
      <ul>
        {data.ingredients.map(
          (ingredient) =><li key={id}>{ingredient}</li>
        )}

      </ul>



      </div>
     )
  
    
  }
 
  
 
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 