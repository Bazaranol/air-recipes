import {
    RecipeActionTypes,
    RecipesAction,
    RecipeState,
} from "../../types/recipesTypes"
const inititalState: RecipeState = {
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

export const recipeReducer = (
    state = inititalState,
    action: RecipesAction
): RecipeState => {
    switch (action.type) {
        case RecipeActionTypes.FETCH_RECIPES:
            return inititalState
        case RecipeActionTypes.FETCH_RECIPE_SUCCESS:
            return { loading: false, error: null, recipe: action.payload }
        case RecipeActionTypes.FETCH_RECIPES_ERROR:
            return inititalState
        default:
            return state
    }
}
