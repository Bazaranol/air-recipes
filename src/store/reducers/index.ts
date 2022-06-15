// import { recipesReducer } from "./recipesReducer"
import { combineReducers } from "redux"
import recipeReducer from "./recipeReducer"
import filterReducer from "../reducers/filterSlice"
import recipesReducer from "./recipesReducer"
export const rootReducer = combineReducers({
    recipesReducer,
    recipeReducer,
    filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>
