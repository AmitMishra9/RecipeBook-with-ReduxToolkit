import AddRecipe from './component/AddRecipe'
import DisplayRecipe from './component/DisplayRecipe'
import FavoriteRecipe from './component/FavoriteRecipe'
import SearchBar from './component/SearchBar'

function App() {
 return(
     <>
      <AddRecipe/>
      <br></br>
       <br></br>
         <SearchBar/>
       <DisplayRecipe/>

       <br></br><br></br>
       <br></br><br></br>
       <FavoriteRecipe/>
     </>
 )
}

export default App
