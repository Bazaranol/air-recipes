export enum RecipeActionTypes {
    FETCH_RECIPES = "FETCH_RECIPES",
    FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS",
    FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS",
    FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR",
}
export type RecipesState = {
    recipes: IRecipe[]
    loading: boolean
    error: null | string
}
export type RecipeState = {
    recipe: IRecipe
    loading: boolean
    error: null | string
}
export interface IRecipe {
    id: number
    title: string
    description: string
    caloricity: number
    thumbnail: string
    images: string[]
    cuisine: ICuisine
    cookTime: number
    difficulty: string
    ingredients: string[]
    instructions: string[]
}
type ICuisine = {
    id: number
    title: string
}
type FetchRecipesAction = {
    type: RecipeActionTypes.FETCH_RECIPES
}
type FetchRecipesSuccessAction = {
    type: RecipeActionTypes.FETCH_RECIPES_SUCCESS
    payload: IRecipe[]
}
type FetchRecipeSuccessAction = {
    type: RecipeActionTypes.FETCH_RECIPE_SUCCESS
    payload: IRecipe
}
type FetchRecipesErrorAction = {
    type: RecipeActionTypes.FETCH_RECIPES_ERROR
    payload: string
}
export type RecipesAction =
    | FetchRecipesAction
    | FetchRecipesSuccessAction
    | FetchRecipesErrorAction
    | FetchRecipeSuccessAction
