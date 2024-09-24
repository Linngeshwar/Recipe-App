import React from "react";
import Title from "../components/Title.jsx";
import Getrecipe from "../components/Getrecipe.jsx";
import Recipe from "../components/Recipe.jsx";
import "../styles/Home.css";

function Home(){
    return (<>
        <div className="w-screen h-screen flex flex-col justify-start items-center text-center">
            <div className="w-full pt-10 flex flex-col justify-center items-center">
                <Title />
            </div>
            <Recipe/>
            <Getrecipe/>
        </div>
    </>)
}

export default Home

