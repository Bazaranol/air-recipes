import axios from "axios"
import { Dispatch } from "redux"
import { RecipeActionTypes, RecipesAction } from "../../types/recipesTypes"

export const fetchRecipe = (id: number) => {
    return async (dispatch: Dispatch<RecipesAction>) => {
        try {
            dispatch({ type: RecipeActionTypes.FETCH_RECIPES })
            const response = await axios.get(
                `https://test.kode-t.ru/detail_${id}.json`
            )
            dispatch({
                type: RecipeActionTypes.FETCH_RECIPE_SUCCESS,
                payload: response.data.recipe,
            })
        } catch (error) {
            dispatch({
                type: RecipeActionTypes.FETCH_RECIPES_ERROR,
                payload: "Ошибка при загрузке рецепта",
            })
        }
    }
}
