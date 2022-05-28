import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RecipeCard } from "../molecules/Card/RecipeCard";
import { CardContainer } from "../organisms/CardContainer/CardContainer";

import { SearchContext } from "../templates/Layout";

export const RecipesPage: React.FC = () => {
    const { recipes, loading, error } = useTypedSelector(
        (state) => state.recipes
    );
    const search = useContext(SearchContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const recipeQuery = searchParams.get("recipe") || "";
    useEffect(() => {
        const query = search?.toLowerCase();
        setSearchParams({ recipe: query });
    }, [search]);
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
    return (
        <Box
            pt={"30px"}
            mt={"30px"}
            maxWidth={"1200px"}
            sx={{ position: "absolute", background: "white" }}
        >
            <CardContainer>
                {recipes
                    .filter(
                        (recipe) =>
                            recipe.title.toLowerCase().includes(recipeQuery) ||
                            recipe.description
                                .toLowerCase()
                                .includes(recipeQuery) ||
                            recipe.cuisine.title
                                .toLowerCase()
                                .includes(recipeQuery)
                    )
                    .map((recipe) => (
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
                    ))}
            </CardContainer>
        </Box>
    );
};
