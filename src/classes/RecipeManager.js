import Recipe from "./Recipe";
export default class RecipeManager {
  constructor(ingredientDB) {
    this.ingredientDB = ingredientDB;
    this.filteredRecipes = [];
  }

  createRecipeInstances(filteredRecipes) {
    return this.filteredRecipes = filteredRecipes.map(recipeData => {
      return new Recipe(recipeData, this.ingredientDB);
    });
  }
}