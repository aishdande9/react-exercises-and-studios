import { useState } from 'react';


export default function StatusChange () {
   const [notes , setNotes] = useState("");
   const [recipeStatus , setRecipeStatus] = useState(false)
   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
     setRecipeStatus(false);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
            
         <p>My Recipe Notes: {notes}</p>

<p>{`${recipeStatus ? "I have tried this recipe":"I have not tried this recipe"}`}</p>
         </form>

      </div>
   );
}
