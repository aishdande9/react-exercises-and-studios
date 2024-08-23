
import styles from './Description.module.css'
import React from 'react';


export default function RecipeAuthor(){
    let authorLink = "https://www.gordonramsay.com/gr/recipes/pannacottawithpomegranateglaze/";
    let authorPhoto = "https://deadline.com/wp-content/uploads/2021/08/MC10_1007-17-16-Elim_0305.jpg";
    let authorName = "Gordon Ramsay";

return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Gordon Ramsay on Masterchef" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Gordon Ramsay</a> 
      </div>
   </div>
);
    
}
