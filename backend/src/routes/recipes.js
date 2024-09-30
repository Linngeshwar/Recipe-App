const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const recipeRouter = express.Router();

recipeRouter.get("/",async (req, res) => {
  const apiKey = process.env.API_KEY;
  const apiKey2 = process.env.API_KEY2;
  const query = req.query.dishName;
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=1&apiKey=${apiKey2}`;
try {
  const response = await fetch(url);
    if(response.ok) { 
      const data = await response.json();
      let recipeIDs = [];

      data.results.forEach((recipe) => {
        recipeIDs.push(recipe.id);
      });

      if(recipeIDs.length === 0) {
        res.status(404).send("No recipes found");
      }
      const recipeData = await Promise.all(
        recipeIDs.map(async (id) => {
          const recipeResponse = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey2}`
          );
          const recipeData = await recipeResponse.json();
          return recipeData;
        }
      ));
      res.status(200).send(recipeData);
    }else{
      res.status(404).send("No recipes found");
    }
  } catch (error) {
    console.error(error); 
  }
});

module.exports = recipeRouter;