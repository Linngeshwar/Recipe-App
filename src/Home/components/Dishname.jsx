import React from "react";

function Dishname() {
  return (
    <div className="bg-[#424248] flex justify-center w-6/12 rounded-lg p-2">
      <div className="relative w-full m-2">
        <input
          id="dishName"
          className="peer w-full p-2 border-2 border-white rounded-md text-white outline-none placeholder-transparent bg-[#424248]"
          type="text"
          placeholder="Dish Name"
        />
        <label
          htmlFor="dishName"
          className="absolute left-2 -top-2.5 bg-[#424248] px-1 text-sm text-white transition-all hover:cursor-text
                     peer-placeholder-shown:text-xl peer-placeholder-shown:text-white 
                     peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-sm 
                     peer-focus:text-white"
        >
          Dish Name
        </label>
      </div>
    </div>
  );
}

export default Dishname;