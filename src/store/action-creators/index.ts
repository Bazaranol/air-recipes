import * as RecipesActionCreators from "./recipes"
import * as RecipeActionCreators from "./recipe"

export default {
    ...RecipeActionCreators,
    ...RecipesActionCreators,
}
