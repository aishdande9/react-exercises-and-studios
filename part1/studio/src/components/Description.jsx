
import styles from './Description.module.css';

function RecipeAuthor(){
    const authorLink = "https://www.gordonramsay.com/gr/recipes/pannacottawithpomegranateglaze/";
    const authorPhoto = "https://deadline.com/wp-content/uploads/2021/08/MC10_1007-17-16-Elim_0305.jpg";
    const authorName = "Gordon Ramsay";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "gorden ramsey master chef" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}


export default RecipeAuthor;