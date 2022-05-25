import { CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CardContainer } from "../organisms/CardContainer/CardContainer";

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
            <div className="recipe">
                <div className="recipeDescription">
                    <Typography variant="h3" fontWeight={800}>
                        {recipe.title} {id}
                    </Typography>
                    <Typography variant="body1">
                        {recipe.description}
                    </Typography>
                    <div className="recipeParams">
                        <div className="difficulty">{recipe.difficulty}</div>
                        <div className="cookTime">{recipe.cookTime}</div>
                        <div className="caloricity">{recipe.caloricity}</div>
                        <div className="Kitchen">{recipe.cuisine.title}</div>
                    </div>
                    <div className="recipeIngredients">
                        <Typography variant="h5" fontWeight={800}>
                            Ingredients
                        </Typography>
                        <ul>
                            {recipe.ingredients.map((ingredient) => (
                                <li key={id}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="recipeInstructions">
                        <Typography variant="h5" fontWeight={800}>
                            Instructions
                        </Typography>
                        <ul>
                            {recipe.instructions.map((instruction) => (
                                <li key={id}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="recipeImages">
                    <CardMedia
                        component="img"
                        height="196"
                        width="196  "
                        image={recipe.images[0]}
                        alt="image"
                        className="cardMedia"
                    ></CardMedia>
                </div>
            </div>
        </>
    );
};
