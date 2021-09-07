import Recipe from "./Recipe";
export default class RecipeManager {
  constructor(ingredientDB) {
    this.filteredRecipes = [];
    this.ingredientDB = ingredientDB;
  }

  storeFilteredRecipes(filteredRecipes) {
    this.filteredRecipes = filteredRecipes;
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