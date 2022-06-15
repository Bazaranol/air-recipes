import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchRecipe } from "../../store/action-creators/recipe";
import { CookDescription } from "../atoms/CookDescription/CookDescription";
import { Ingredients } from "../atoms/Ingredients/Ingredients";
import { Instructions } from "../atoms/Instructions/Instructions";
import { ImageSlider } from "../molecules/ImageBlock/ImageSlider";
import "./page.css";
type recipeParams = {
    id: string;
};

export const RecipePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<recipeParams>();
    const { recipe, loading, error } = useTypedSelector(
        (state) => state.recipeReducer
    );
    useEffect(() => {
        id && dispatch(fetchRecipe(parseInt(id)));
    }, []);
    if (loading) {
        return <h1>Загрузка...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        <>
            <Box className="recipe">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        mr: "20px",
                    }}
                >
                    <Box mb={2}>
                        <Typography
                            className="recipeTitle"
                            variant="h3"
                            fontWeight={800}
                            mb={2}
                            fontSize="40px"
                            sx={{ sm: { fontSize: "30px" } }}
                        >
                            {recipe.title}
                        </Typography>
                        <Typography variant="body1">
                            {recipe.description}
                        </Typography>
                    </Box>
                    <Box
                        className="cookDesc"
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
