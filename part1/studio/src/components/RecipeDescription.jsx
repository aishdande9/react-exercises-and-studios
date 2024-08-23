import React from 'react';
import RecipeAuthor from './components/Description.jsx';

class RecipeDescription extends React.Component{
    render(){
        return(<div> 
            <div>
               <h1>vanilla infused pannacottawithpomegranateglaze</h1>
               <ul>
<li>Prepare panna cotta - in a medium saucepot combing cream, milk, sugar, and vanilla bean, whisking well to combine. Place over medium heat and bring to a slight boi,
     remove from heat. Whisk in gelatin until fully dissolved and the texture is silky smooth and slightly thickened. </li>
     <li>Divide cream amongst each mold, leaving room for the pomegranate glaze later. Set the panna 
        cotta in the refrigerator to cool and chill overnight or at least 1 hour. </li>
        <li>Meanwhile, prepare the glaze - place a large saute pan over medium heat and add in the sugar and Pomegranate juice. Bring it to a boil until it
             reduces down to a consistency of a sticky syrup. Transfer the glaze into a measuring cup or a jug and leave it to cool.</li>
             <li>To garnish - remove the panna cotta from the fridge and carefully pour pomegranate glaze over. Using a shard knife, shave chocolate bar by sliding the blade along the chocolate to create curls.
                 Garnish panna cotta with chocolate curls and fresh pomegranate arils. Serve immediately.</li>
               </ul>
               
            </div>
            <RecipeAuthor />
         </div>);
    }
}

export default RecipeDescription;


  