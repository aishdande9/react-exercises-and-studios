
import recipedata from "./recipe.json";
import RecipeName from "./RecipeName";
import "./styling.css";

function RecipeImage() {
   return recipedata.map(
    (data,index) => <div key={index} className="recipeImage"> <img src={ data.recipeImage }  alt={RecipeName} />{data.recipeImage}</div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 