import "./App.css";
 //import ClickedButton from "./components/ClickedButton";
import RateARecipe from "./components/RateARecipe";
import React from "react";
import Button from "./components/Button.jsx";

import "./components/styling.css";

import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
 import RecipeImage from "./components/RecipeImage.jsx";
 import RecipeName from "./components/RecipeName";

export default function App() {
  return (
    <>
      <RecipeImage />
       <RecipeName />  
        <RateARecipe rating={4} />
        <Button saveButton={true} />
         <AuthorInfo /> 
      <IngredientList />  
    </>
  );
}
