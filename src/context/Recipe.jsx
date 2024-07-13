import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState( []);
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;
  const baseUrl = 'https://api.edamam.com';

  const getData = async(query, meal)=>{
    let url = `${baseUrl}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    if(meal) url+=`&mealType=${meal}`

    if(query!=''){
      // Fetch the recipes 
     const {data} =  await axios.get(url)
     if(data.count===0){
      toast.error(`No Recipe with name ${query}`)
      getData('any')
     }

     setRecipes(data.hits)
     console.log(data.hits)

    }else{
      toast.error('Please Fill in the form')
    }

  }


  useEffect(()=>{
    getData('any')
  }, [])

  return (
    <RecipeContext.Provider value={{ mealTypes, recipes, getData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
