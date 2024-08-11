import React, {useEffect ,useState}  from 'react';
import { useDispatch,} from 'react-redux';
import {searchResipeQuery} from '../Redux/features/recipeSlice';

function SearchBar() {
  //const recipes = useSelector((state) => state.recipes.recipes);


  const dispatch= useDispatch();
  const [searchTerm, setSearchTerm]= useState(''); 
  
  
   // Debounceing Perfrom here 
  useEffect(()=>{
      const debounceTimeout= setTimeout(()=>{
          dispatch(searchResipeQuery(searchTerm));
      },500)
      return ()=>{
        clearTimeout(debounceTimeout);
        };
    },[searchTerm,dispatch]);
     

const handleSearchChange=(e)=>{
        setSearchTerm(e.target.value);
    }

  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4 align-bottom text-center">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search recipes....."
          className="w-80 p-2 border border-gray-950 text-center text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
           onChange={handleSearchChange}
          />
      </div>

     
    </div>
  );
}

export default SearchBar;
