import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchRecipes } from "../store/action-creators/recipe";
import { RecipesAction } from "../types/recipesTypes";

export const Recipes: React.FC = () => {
    const { recipes, loading, error } = useTypedSelector(
        (state) => state.recipe
    );
    const { fetchRecipes } = useAction();
    useEffect(() => {
        fetchRecipes();
    }, []);
    if (loading) {
        return <h1>Загрузка...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
    console.log(recipes);
    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>{recipe.title}</div>
            ))}
        </div>
    );
};
