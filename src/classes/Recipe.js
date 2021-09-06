/* eslint-disable max-len */
import Ingredient from './Ingredient';

export default class Recipe {
  constructor(recipeDetails, ingredientsDataBase) {
    this.ingredientsDataBase = ingredientsDataBase;
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.instructions = recipeDetails.instructions;
    this.name = recipeDetails.name;
    this.tags = recipeDetails.tags;
    this.recipeIngredients = recipeDetails.ingredients;
    this.processedIngredients = this.processIngredients();
  }

  processIngredients() {
    let processedIngredients = this.recipeIngredients.map(ingredientDetails => {
      let newIngredient = new Ingredient(ingredientDetails, this.ingredientsDataBase);
      return newIngredient;
    })
    return processedIngredients;
  }
}