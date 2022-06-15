import { IRecipe } from "./../../types/recipesTypes"
import { PayloadAction } from "@reduxjs/toolkit"
import { fetchRecipe } from "./../action-creators/recipe"
import { createSlice } from "@reduxjs/toolkit"
import { RecipeState } from "../../types/recipesTypes"

const initialState: RecipeState = {
    recipe: {
        id: 0,
        title: "",
        description: "",
        caloricity: 0,
        thumbnail: "",
        images: [],
        cuisine: { id: 0, title: "" },
        cookTime: 0,
        difficulty: "",
        ingredients: [],
        instructions: [],
    },
    loading: false,
    error: null,
}

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRecipe.fulfilled.type]: (
            state,
            action: PayloadAction<IRecipe>
        ) => {
            state.loading = false
            state.error = ""
            state.recipe = action.payload
        },
        [fetchRecipe.pending.type]: (state) => {
            state.loading = true
        },
        [fetchRecipe.rejected.type]: (
            state,
            action: PayloadAction<string | null>
        ) => {
            state.loading = false
            state.error = action.payload
        },
    },
})
export default recipeSlice.reducer
