import Recipe from "./Recipe";
export default class RecipeManager {
  constructor(ingredientDB) {
    this.ingredientDB = ingredientDB;
    this.filteredRecipes = [];
  }

  storeFilteredRecipes(filteredRecipes) {
    this.filteredRecipes = filteredRecipes;
  }

  createRecipeInstances() {
    this.filteredRecipes = this.filteredRecipes.map(recipeData => {
      return new Recipe(recipeData, this.ingredientDB);
    });
  }
}