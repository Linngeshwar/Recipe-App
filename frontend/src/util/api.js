import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",   
    headers: {
        'Content-Type': 'application/json',
      },
});

export const getRecipes = (dishName) => api.get(`/api/recipes?dishName=${dishName}`);   

export default api;