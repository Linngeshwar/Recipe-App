import React from "react";
import { getRecipes } from "../util/api";

function Getrecipe() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dishName = e.target.dishName.value;
      const response = await getRecipes(dishName);
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
            <button type="submit" className="text-3xl text-[#ffffff] m-[3rem] py-2 px-5 bg-[#5a5a69]  rounded-[5px] outline-none hover:cursor-pointer hover:bg-[#5f5f6e] hover:scale-[1.1] active:bg-[#6464c6] transition-all duration-300 ease-in-out">GET RECIPES</button>
    </div>
    </form>
  );
}

export default Getrecipe;