import React from "react";
import "./ingredients.css";
interface IIngredients {
    ingredients: string[];
}

export const Ingredients: React.FC<IIngredients> = ({ ingredients }) => {
    return (
        <div>
            <ul className="ingredientsList">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};
