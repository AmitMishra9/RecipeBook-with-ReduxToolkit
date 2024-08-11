import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addRecipe } from "../Redux/features/recipeSlice";

function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
  title:" ",
  ingredients:" ",
  step:" ",
  image:null,
  });
  
  const dispatch=useDispatch();


  /* Handle Image here  */
  const handleFileChange = (e) => {
     const file =e.target.files[0];
     const reader= new FileReader();

     reader.onloadend=()=>{
        setRecipeData({...recipeData,image: reader.result});
     }

     if(file){
        reader.readAsDataURL(file);
     }
  };
   
  /* Handel  user  Inputs  */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
     setRecipeData({ ...recipeData, [name]: value });
  };

    /* From will be submited here and data will be pass reducx store  */
  const handleSubmit = (e) => {
    e.preventDefault();
     if(recipeData.title && recipeData.ingredients && recipeData.step){
         dispatch(addRecipe(recipeData));
     
    console.log(recipeData);
    setRecipeData({
         title:"",
         ingredients:"",
         step:" ",
         image:null,
    });
}
else {
      alert("Please fill in all the fields.");
}
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-pink-50 rounded-lg shadow-md">
    
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Add New Recipe</h2>

        <div className="mb-4">
          <label className="block text-pink-600 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipeData.title}
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
            value={recipeData.ingredients}
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
            value={recipeData.step}
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
      </form>
    </>
  );
}

export default AddRecipe;
