import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeRecipe } from '../Redux/features/recipeSlice';



function FavoriteRecipe() {
  const favRecipe = useSelector((state)=>state.recipes.favorites);
  const dispatch =useDispatch();


  return (
    <div className="p-4 bg-gray-400 min-h-screen">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Favorite-Recipes</h1>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {favRecipe.map((item) => (
        <div key={item.id+1} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">{item.title}</h3>
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
            >
              Update
            </button>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                onClick={() => {
                  dispatch(removeRecipe(item.id));
                }}
              >
                Remove
              </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default FavoriteRecipe
