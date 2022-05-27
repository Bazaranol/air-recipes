import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CookDescription } from "../atoms/CookDescription/CookDescription";
import { Ingredients } from "../atoms/Ingredients/Ingredients";
import { Instructions } from "../atoms/Instructions/Instructions";
import { ImageSlider } from "../molecules/ImageBlock/ImageSlider";

type recipeParams = {
    id: string;
};

export const RecipePage: React.FC = () => {
    const { id } = useParams<recipeParams>();
    console.log(id);
    const { recipe, loading, error } = useTypedSelector(
        (state) => state.recipe
    );
    const { fetchRecipe } = useAction();
    useEffect(() => {
        fetchRecipe(parseInt(id!));
    }, []);
    if (loading) {
        return <h1>Загрузка...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
    console.log(recipe);
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: "60px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        mr: "20px",
                    }}
                >
                    <Box mb={2}>
                        <Typography
                            variant="h3"
                            fontWeight={800}
                            mb={2}
                            fontSize="40px"
                        >
                            {recipe.title}
                        </Typography>
                        <Typography variant="body1">
                            {recipe.description}
                        </Typography>
                    </Box>
                    <Box
                        mb={3}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <CookDescription
                            difficulty={recipe.difficulty}
                            cookTime={recipe.cookTime}
                            caloricity={recipe.caloricity}
                            cuisineTitle={recipe.cuisine.title}
                        />
                    </Box>
                    <Box mb={3}>
                        <Typography variant="h5" fontWeight={800} mb={2}>
                            Ingredients
                        </Typography>
                        <Box>
                            <Ingredients ingredients={recipe.ingredients} />
                        </Box>
                    </Box>
                    <Box mb={3}>
                        <Typography variant="h5" fontWeight={800} mb={2}>
                            Instructions
                        </Typography>
                        <Box>
                            <Instructions instructions={recipe.instructions} />
                        </Box>
                    </Box>
                </Box>
                <ImageSlider images={recipe.images} />
            </Box>
        </>
    );
};
