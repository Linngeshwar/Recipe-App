import axios from "axios";

const api = axios.create({
    baseURL: "https://recipe-app-1n5l.vercel.app/",   
    headers: {
        'Content-Type': 'application/json',
      },
});

export const getRecipes = (dishName) => api.get(`/api/recipes?dishName=${dishName}`);   

export default api;