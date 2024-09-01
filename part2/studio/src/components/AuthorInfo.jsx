import recipedata from "./recipe.json";
import "./styling.css";
import React from "react";


function AuthorInfo() {

  const recipeAuthor = recipedata.map(
      (data) =><div key={data.name}>{data.author}</div>
    )
  
  const recipeAuthorImage = recipedata.map(
      (data) =><div key={data.name} className="authorImage"> <img src={ data.authorImage }  alt={data.author} /></div>
    )

  const recipeWebsite =  recipedata.map(
      (data) =>
      <div>
        <a href={data.website} key={data.name}>{data.website}</a>
        </div>
    )
   

  
  return (
    <div>
       {recipeAuthorImage}
       {recipeAuthor}
       {recipeWebsite}
    </div>
 );
  
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 