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
