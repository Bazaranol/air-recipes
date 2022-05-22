export enum RecipeActionTypes {
    FETCH_RECIPES = "FETCH_RECIPES",
    FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS",
    FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR",
}
export interface RecipesState {
    recipes: any[]
    loading: boolean
    error: null | string
}

interface FetchRecipesAction {
    type: RecipeActionTypes.FETCH_RECIPES
}
interface FetchRecipesSuccessAction {
    type: RecipeActionTypes.FETCH_RECIPES_SUCCESS
    payload: any[]
}
interface FetchRecipesErrorAction {
    type: RecipeActionTypes.FETCH_RECIPES_ERROR
    payload: string
}
export type RecipesAction =
    | FetchRecipesAction
    | FetchRecipesSuccessAction
    | FetchRecipesErrorAction
