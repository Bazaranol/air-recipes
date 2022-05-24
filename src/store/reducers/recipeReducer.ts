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
        thumbnail: 0,
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
            return {
                loading: true,
                error: null,
                recipe: {
                    id: 0,
                    title: "",
                    description: "",
                    caloricity: 0,
                    thumbnail: 0,
                    images: [],
                    cuisine: { id: 0, title: "" },
                    cookTime: 0,
                    difficulty: "",
                    ingredients: [],
                    instructions: [],
                },
            }
        case RecipeActionTypes.FETCH_RECIPE_SUCCESS:
            return { loading: false, error: null, recipe: action.payload }
        case RecipeActionTypes.FETCH_RECIPES_ERROR:
            return {
                loading: false,
                error: action.payload,
                recipe: {
                    id: 0,
                    title: "",
                    description: "",
                    caloricity: 0,
                    thumbnail: 0,
                    images: [],
                    cuisine: { id: 0, title: "" },
                    cookTime: 0,
                    difficulty: "",
                    ingredients: [],
                    instructions: [],
                },
            }
        default:
            return state
    }
}
