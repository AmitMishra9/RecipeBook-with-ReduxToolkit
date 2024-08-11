import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteRecipe, removeRecipe, updateRecipe } from '../Redux/features/recipeSlice';

function DisplayRecipe() {

  const [isUpdating, setUpdating] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: "",
    title: "",
    ingredients: "",
    step: "",
    image: null,
  })

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const searchQuery = useSelector((state) => state.recipes.searchQuery)

  //console.log("all recipes ",recipes);

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery)
  );


  const handelUpdate = (item) => {
    setUpdating(true);
    setCurrentTask({
      id: item.id,
      title: item.title,
      ingredients: item.ingredients,
      step: item.step,
      image: item.image
    });
  }


const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(updateRecipe(currentTask));
    setUpdating(false);
    setCurrentTask({id:"", title:" ",ingredients:" ",step:"", image:null});
}


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask({
      ...currentTask,
      [name]: value,
    });
  }
     
  const handleFileChange=()=>{
     const file=e.target.files[0];
     const reader=new FileReader();
      reader.onloadend=()=>{
          setCurrentTask({...currentTask,image:reader.result});
      };

      if(file){
         reader.readAsDataURL(file);
      }
  
    }


  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">All Recipes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            {isUpdating && currentTask.id === item.id ? (
              <form
                onSubmit={handleFormSubmit}
                className="max-w-lg mx-auto p-8 bg-pink-50 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Add New Recipe</h2>
  
                <div className="mb-4">
                  <label className="block text-pink-600 font-semibold mb-2">Recipe Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={currentTask.title}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
  
                <div className="mb-4">
                  <label className="block text-pink-600 font-semibold mb-2">Ingredients</label>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    value={currentTask.ingredients}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
  
                <div className="mb-4">
                  <label className="block text-pink-600 font-semibold mb-2">Steps</label>
                  <textarea
                    id="step"
                    name="step"
                    value={currentTask.step}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
  
                <div className="mb-6">
                  <label className="block text-pink-600 font-semibold mb-2">Recipe Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition duration-200"
                   
                  >
                  Add Recipe
                </button>
                
                <button onClick={()=>setUpdating(false)} 
                className="w-50 bg-gray-950 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition duration-200"
                >Cancle</button>

              </form>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                  {item.title}
                </h3>
                <h4 className="text-md text-gray-600 mb-2">{item.ingredients}</h4>
                <h5 className="text-sm text-gray-500 mb-4">{item.step}</h5>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-80 h-50 object-cover rounded-2xl mb-4"
                  />
                )}
  
                <div className="flex justify-between">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    onClick={() => handelUpdate(item)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                    onClick={() => dispatch(removeRecipe(item.id))}
                  >
                    Remove
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
                    onClick={() => dispatch(addFavoriteRecipe(item.id))}
                  >
                    Add to Favorite
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  
    }

export default DisplayRecipe;
