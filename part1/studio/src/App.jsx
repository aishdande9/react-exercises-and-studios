
import './App.css'
import RecipeDescription from './components/RecipeDescription'
import RecipeIngredients from './components/Ingredients.jsx'



function App() {

  return (
    <>
      <div className="App">
      <div>
      <RecipeDescription />
      <RecipeIngredients />
     
   </div>
      </div>
    </>
  )
}

export default App