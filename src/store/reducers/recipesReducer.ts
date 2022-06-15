import { fetchRecipes } from "./../action-creators/recipes"
import { IRecipe } from "./../../types/recipesTypes"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RecipesState } from "../../types/recipesTypes"

const initialState: RecipesState = {
    recipes: [],
    loading: false,
    error: null,
}

export const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRecipes.fulfilled.type]: (
            state,
            action: PayloadAction<IRecipe[]>
        ) => {
            state.loading = false
            state.error = ""
            state.recipes = action.payload
        },
        [fetchRecipes.pending.type]: (state) => {
            state.loading = true
        },
        [fetchRecipes.rejected.type]: (
            state,
            action: PayloadAction<string | null>
        ) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export default recipesSlice.reducer
