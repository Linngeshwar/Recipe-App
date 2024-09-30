import React from "react";
import { useNavigate } from "react-router-dom";
import { getRecipes } from "../util/api";

function Getrecipe() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dishName = e.target.dishName.value;
      let response = await getRecipes(dishName);
      response = response.data;
      
      // Clean the response to ensure it's serializable
      const cleanResponse = response.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        extendedIngredients: recipe.extendedIngredients.map(ingredient => ({
          id: ingredient.id,
          name: ingredient.name,
          original: ingredient.original,
          amount: ingredient.amount,
          unit: ingredient.unit
        })),
        instructions: recipe.analyzedInstructions[0]?.steps.map(step => step.step) || []
      }));

      console.log("Navigating with data:", cleanResponse);
      navigate("/recipe", { state: { recipes: cleanResponse } });
    } catch (error) {
      console.error("Error fetching recipes:", error);
      navigate("/recipe", { state: { recipes: [] } });
    }
  }

  return (
    <form className="flex flex-col align-middle items-center justify-center w-screen" onSubmit={handleSubmit}>
      <div className="bg-[#5a5a69] flex justify-center w-6/12 rounded-lg p-2">
        <div className="relative w-full m-2">
          <input
            id="dishName"
            className="peer w-full p-2 border-2 border-white rounded-md text-white outline-none placeholder-transparent bg-[#5a5a69]"
            type="text"
            placeholder="Dish Name"
          />
          <label
            htmlFor="dishName"
            className="absolute left-2 -top-2.5 bg-[#5a5a69] px-1 text-sm text-white transition-all hover:cursor-text
                       peer-placeholder-shown:text-xl peer-placeholder-shown:text-white 
                       peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-sm 
                       peer-focus:text-white"
          >
            Dish Name
          </label>
        </div>
      </div>
      <div className="">
        <button type="submit" className="text-3xl text-[#ffffff] m-[3rem] py-2 px-5 bg-[#5a5a69] rounded-[5px] outline-none hover:cursor-pointer hover:bg-[#5f5f6e] hover:scale-[1.1] active:bg-[#6464c6] transition-all duration-300 ease-in-out">GET RECIPES</button>
      </div>
    </form>
  );
}

export default Getrecipe;