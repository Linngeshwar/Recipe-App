import React,{useState} from "react";
import './Home.css'
import './components/Title.jsx'
import Title from "./components/Title.jsx";
import UnderLine from "./components/UnderLine.jsx";
import Dishname from "./components/Dishname.jsx";
import { Input } from "postcss";
import Getrecipe from "./components/Getrecipe.jsx";
import Recipe from "./components/recipe.jsx";

function Home(){
    return (<>
        <div className="w-screen h-screen flex flex-col justify-start items-center text-center">
            <div className="w-full pt-10 flex flex-col justify-center items-center">
                <Title />
            </div>
            <Recipe/>
            <Dishname/>
            <Getrecipe/>
        </div>
    </>)
}

export default Home

