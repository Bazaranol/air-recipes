import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { RecipeCard } from "../molecules/Card/RecipeCard";
import { CardContainer } from "../organisms/CardContainer/CardContainer";

import { SCREENS } from "../../routes/endpoints";
export const RecipesPage: React.FC = () => {
    const { recipes, loading, error } = useTypedSelector(
        (state) => state.recipes
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
        <>
            <h1>hi</h1>
            <CardContainer>
                {recipes.map((recipe) => (
                    <NavLink
                        to={SCREENS.SCREEN_RECIPES + `${recipe.id}`}
                        key={recipe.id}
                    >
                        <RecipeCard
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.title}
                            description={recipe.description}
                            caloricity={recipe.caloricity}
                            cookTime={recipe.cookTime}
                            thumbnail={recipe.thumbnail}
                            cuisine={recipe.cuisine}
                        ></RecipeCard>
                    </NavLink>
                ))}
            </CardContainer>
        </>
    );
};
