/* eslint-disable max-len */
import Ingredient from './Ingredient';

export default class Recipe {
  constructor(recipeDetails) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.instructions = recipeDetails.instructions;
    this.name = recipeDetails.name;
    this.tags = recipeDetails.tags;
    this.recipeIngredients = recipeDetails.ingredients;
    this.processedIngredients = null;
  }

  processIngredients(dataBase) {
    this.processedIngredients = this.recipeIngredients.map(ingredientDetails => {
      let newIngredient = new Ingredient(ingredientDetails);
      newIngredient.retrieveData(dataBase);
      newIngredient.calculateCost();
      return newIngredient;
    })
  }
}