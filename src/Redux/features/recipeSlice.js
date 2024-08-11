import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    // recipes: JSON.parse(localStorage.getItem('recipes')) || [],  
     recipes: [
  {
    id: 1,
    title: "Butter Chicken",
    ingredients: "Chicken, Butter, Cream, Tomato Sauce, Spices",
    step: "Marinate chicken, cook in tomato gravy, finish with butter and cream",
    image: "creamy_butter_chicken.jpg",
    category: "Non-veg"
  },
  {
    id: 2,
    title: "Vegetable Biryani",
    ingredients: "Basmati Rice, Mixed Vegetables, Biryani Masala, Saffron",
    step: "Layer rice and vegetables, cook with aromatic spices",
    image: "aromatic_veg_biryani.jpg",
    category: "Veg"
  },
  {
    id: 3,
    title: "Palak Paneer",
    ingredients: "Spinach, Paneer, Onions, Tomatoes, Spices",
    step: "Puree spinach, cook with spices, add paneer cubes",
    image: "green_palak_paneer.jpg",
    category: "Veg"
  },
  {
    id: 4,
    title: "Chicken Tikka Masala",
    ingredients: "Chicken Tikka, Tomato Gravy, Cream, Spices",
    step: "Grill marinated chicken, simmer in spiced tomato gravy",
    image: "spicy_chicken_tikka_masala.jpg",
    category: "Non-veg"
  },
  {
    id: 5,
    title: "Dal Makhani",
    ingredients: "Black Lentils, Kidney Beans, Butter, Cream, Spices",
    step: "Slow cook lentils and beans, finish with butter and cream",
    image: "creamy_dal_makhani.jpg",
    category: "Veg"
  },
  {
    id: 6,
    title: "Tandoori Chicken",
    ingredients: "Chicken, Yogurt, Lemon Juice, Tandoori Masala",
    step: "Marinate chicken in spiced yogurt, grill until charred",
    image: "red_tandoori_chicken.jpg",
    category: "Non-veg"
  },
  {
    id: 7,
    title: "Chana Masala",
    ingredients: "Chickpeas, Onions, Tomatoes, Garam Masala",
    step: "Cook chickpeas with onion-tomato gravy and spices",
    image: "spiced_chana_masala.jpg",
    category: "Veg"
  },
  {
    id: 8,
    title: "Malai Kofta",
    ingredients: "Potato, Paneer, Cashew Nuts, Cream, Tomato Gravy",
    step: "Make kofta balls, fry, and serve with creamy tomato gravy",
    image: "golden_malai_kofta.jpg",
    category: "Veg"
  },
  {
    id: 9,
    title: "Lamb Rogan Josh",
    ingredients: "Lamb, Yogurt, Onions, Tomatoes, Kashmiri Chili",
    step: "Slow cook lamb in spiced yogurt-based gravy",
    image: "rich_rogan_josh.jpg",
    category: "Non-veg"
  },
  {
    id: 10,
    title: "Aloo Gobi",
    ingredients: "Potatoes, Cauliflower, Onions, Tomatoes, Turmeric",
    step: "Sauté potatoes and cauliflower with spices",
    image: "yellow_aloo_gobi.jpg",
    category: "Veg"
  },
  {
    id: 11,
    title: "Samosas",
    ingredients: "Flour, Potatoes, Peas, Spices, Oil for frying",
    step: "Make dough, fill with spiced potato mixture, fry until golden",
    image: "crispy_vegetable_samosas.jpg",
    category: "Veg"
  },
  {
    id: 12,
    title: "Chicken Korma",
    ingredients: "Chicken, Yogurt, Cashew Paste, Onions, Garam Masala",
    step: "Cook chicken in creamy cashew and yogurt gravy",
    image: "mild_chicken_korma.jpg",
    category: "Non-veg"
  },
  {
    id: 13,
    title: "Baingan Bharta",
    ingredients: "Eggplant, Onions, Tomatoes, Garlic, Spices",
    step: "Roast eggplant, mash and cook with spiced onion-tomato mixture",
    image: "smoky_baingan_bharta.jpg",
    category: "Veg"
  },
  {
    id: 14,
    title: "Naan Bread",
    ingredients: "Flour, Yogurt, Yeast, Butter, Garlic (optional)",
    step: "Make dough, let rise, shape and cook in tandoor or oven",
    image: "fluffy_garlic_naan.jpg",
    category: "Veg"
  },
  {
    id: 15,
    title: "Gulab Jamun",
    ingredients: "Milk Powder, Flour, Sugar Syrup, Cardamom",
    step: "Make dough balls, fry, and soak in cardamom-flavored syrup",
    image: "sweet_gulab_jamun.jpg",
    category: "Veg"
  }
],
      favorites:[ {
        id: 1,
        title: "Butter Chicken",
        ingredients: "Chicken, Butter, Cream, Tomato Sauce, Spices",
        step: "Marinate chicken, cook in tomato gravy, finish with butter and cream",
        image: "creamy_butter_chicken.jpg",
        category: "Non-veg"
      },
      {
        id: 2,
        title: "Vegetable Biryani",
        ingredients: "Basmati Rice, Mixed Vegetables, Biryani Masala, Saffron",
        step: "Layer rice and vegetables, cook with aromatic spices",
        image: "aromatic_veg_biryani.jpg",
        category: "Veg"
      },
      {
        id: 3,
        title: "Palak Paneer",
        ingredients: "Spinach, Paneer, Onions, Tomatoes, Spices",
        step: "Puree spinach, cook with spices, add paneer cubes",
        image: "green_palak_paneer.jpg",
        category: "Veg"
      },
      {
        id: 4,
        title: "Chicken Tikka Masala",
        ingredients: "Chicken Tikka, Tomato Gravy, Cream, Spices",
        step: "Grill marinated chicken, simmer in spiced tomato gravy",
        image: "spicy_chicken_tikka_masala.jpg",
        category: "Non-veg"
      },
      {
        id: 5,
        title: "Dal Makhani",
        ingredients: "Black Lentils, Kidney Beans, Butter, Cream, Spices",
        step: "Slow cook lentils and beans, finish with butter and cream",
        image: "creamy_dal_makhani.jpg",
        category: "Veg"
      }],
      searchQuery:'',
};

export const recipeSlice= createSlice({
       name:'recipe',
       initialState,
       reducers:{
           addRecipe:(state,action)=>{
            
            const {title,ingredients,step,image}=action.payload;

            const newRecipe={
               id:nanoid(),
               title,
               ingredients,
               step,
               image,
            };
            state.recipes.push(newRecipe);  
            localStorage.setItem('recipes', JSON.stringify(state.recipes)); 
        },
        updateRecipe: (state, action) => {
          const { id, title, ingredients, step, image } = action.payload;
          const index = state.recipes.findIndex((recipe) => recipe.id === id);
      
          if (index !== -1) {
              state.recipes[index] = {
                  ...state.recipes[index], // Preserve other properties
                  title,
                  ingredients,
                  step,
                  image,
              };
              // Optionally, save to localStorage
              // localStorage.setItem('recipes', JSON.stringify(state.recipes));
          }
      },
        removeRecipe:(state,action)=>{
            state.recipes=state.recipes.filter((recipe)=>recipe.id!==action.payload);
            state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
            //localStorage.setItem('recipes', JSON.stringify(state.recipes));
        },

        addFavoriteRecipe:(state,action)=>{
            const recipe =state.recipes.find(recipe => recipe.id=== action.payload);

            if(recipe && !state.favorites.find(fav=> fav.id===recipe.id)){
                state.favorites.push(recipe);
            }
              
        },
        searchResipeQuery:(state,action)=>{
           state.searchQuery=action.payload.toLowerCase(); 
        },

       },

});

export const {addRecipe,updateRecipe,removeRecipe,addFavoriteRecipe,searchResipeQuery}=recipeSlice.actions;
export default recipeSlice.reducer;

