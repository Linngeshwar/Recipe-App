const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const recipeRouter = express.Router();

recipeRouter.get("/",async (req, res) => {
  const appID = process.env.APP_ID;
  const appKey = process.env.APP_KEY;
  const apiKey = process.env.API_KEY;
  const query = req.query.dishName;
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  
  res.json(data);
});

module.exports = recipeRouter;