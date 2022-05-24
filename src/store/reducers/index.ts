import { recipesReducer } from "./recipesReducer"
import { combineReducers } from "redux"
import { recipeReducer } from "./recipeReducer"

export const rootReducer = combineReducers({
    recipes: recipesReducer,
    recipe: recipeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
