import React from "react";
import Recipe from "../components/Recipe.jsx";
import "../styles/Home.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RecipePage() {
  const location = useLocation();

  const recipes = location.state?.recipes || [];

  function hanldeBackToHome() {
    window.location.href = "/";
  }

  if (recipes.length === 0) {
    return <h1 className="text-4xl text-red-700">No recipes found</h1>;
  }

  return (
    <div className="w-screen min-h-screen flex flex-col justify-start items-center text-center">
      <div className="w-full pt-10 flex flex-col justify-center items-center">
        <h1
          className="text-6xl font-bold text-black mb-8 hover:scale-[1.2] transition-all duration-200 ease-in-out hover:cursor-pointer"
          onClick={hanldeBackToHome}
        >
          Recipes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {recipes.map((recipe, index) => (
            <Recipe
              key={recipe.id || index}
              url={recipe.image}
              title={recipe.title}
              ingredients={recipe.extendedIngredients.map(
                (ingredient) => ingredient.original
              )}
              instructions={recipe.instructions}
            />
          ))}
        </div>
      </div>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default RecipePage;
