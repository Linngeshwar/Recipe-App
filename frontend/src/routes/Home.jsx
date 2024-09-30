import React from "react";
import Title from "../components/Title.jsx";
import Getrecipe from "../components/Getrecipe.jsx";
import RecipeAnimation from "../components/RecipeAnimation.jsx";
import "../styles/Home.css";

function Home(){
    return (<>
        <div className="w-screen h-screen flex flex-col justify-start items-center text-center">
            <div className="w-full pt-10 flex flex-col justify-center items-center">
                <Title />
            </div>
            <RecipeAnimation/>
            <Getrecipe/>
        </div>
    </>)
}

export default Home

