import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FilledButton, LinedButton } from "../atoms/Button/Button";
import { RecipeCard } from "../molecules/Card/RecipeCard";
import { CardContainer } from "../organisms/CardContainer/CardContainer";
import { Header } from "../organisms/Header/Header";

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
        <Container fixed>
            <Header />
            <h1>hi</h1>
            <CardContainer>
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.key}
                        title={recipe.title}
                        description={recipe.description}
                        caloricity={recipe.caloricity}
                        cookTime={recipe.cookTime}
                        thumbnail={recipe.thumbnail}
                        cuisine={recipe.cuisine}
                    ></RecipeCard>
                ))}
            </CardContainer>
        </Container>
    );
};
