import React from "react";
import Recipe from "../components/Recipe.jsx";
import "../styles/Home.css";

function RecipePage(){
    return (<>
        <div className="w-screen h-screen flex flex-col justify-start items-center text-center">
            <div className="w-full pt-10 flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold text-black">Recipes</h1>
                <Recipe url="https://img.spoonacular.com/recipes/653192-312x231.jpg" title="No-Bake Fudge Brandy Brownies" 
                ingredients={["1 1/2 tablespoons brandy","1/4 cup butter","1/2 14 ounce can condensed milk","1 1/4 cups Oreo crumbs (about 14 cookies)","1/2 teaspoon vanilla extract","1 c. chopped walnuts"]}
                instructions={["In a pan, melt chocolate morsels and butter on low heat for about a minute or until completely melted. Stir occasionally.",
                    "Remove from heat.In a large bowl, mix Oreo crumbs (set aside a tablespoon or two) and walnuts.",
                    "Add condensed milk, vanilla extract, and chocolate mixture.",
                    "Add brandy and mix well. If you're feeling a little gutsy, add another half a tablespoon of brandy for a solid kick!Line whatever container you want to put it in with foil or grease it with butter and sugar.  Press the mixture firmly onto bottom of container.",
                    "Garnish with Oreo crumbs on top.Refrigerate for about two hours and enjoy!"
                ]}/>
            </div>
        </div>
    </>
    );
};

export default RecipePage;