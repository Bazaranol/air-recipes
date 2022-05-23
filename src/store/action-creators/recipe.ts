import axios from "axios"
import { Dispatch } from "redux"
import { RecipesAction, RecipeActionTypes } from "./../../types/recipesTypes"

export const fetchRecipes = () => {
    return async (dispatch: Dispatch<RecipesAction>) => {
        try {
            dispatch({ type: RecipeActionTypes.FETCH_RECIPES })
            const response = await axios.get("https://test.kode-t.ru/list.json")
            dispatch({
                type: RecipeActionTypes.FETCH_RECIPES_SUCCESS,
                payload: response.data.recipes,
            })
        } catch (error) {
            dispatch({
                type: RecipeActionTypes.FETCH_RECIPES_ERROR,
                payload: "Ошибка при загрузке",
            })
        }
    }
}
export const fetchRecipe = (id: number) => {
    return async (dispatch: Dispatch<RecipesAction>) => {
        try {
            dispatch({ type: RecipeActionTypes.FETCH_RECIPES })
            const response = await axios.get(
                `https://test.kode-t.ru/detail_${id}.json`
            )
            dispatch({
                type: RecipeActionTypes.FETCH_RECIPES_SUCCESS,
                payload: response.data.recipe,
            })
        } catch (error) {
            dispatch({
                type: RecipeActionTypes.FETCH_RECIPES_ERROR,
                payload: "Ошибка при загрузке",
            })
        }
    }
}
