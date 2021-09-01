/* eslint-disable max-len */
import {ingredientsDataBase} from '../data/dataTestRecipe';

export default class Ingredient {
  constructor(ingredientDetails) {
    this.id = ingredientDetails.id;
    this.name = this.retrieveData();
    this.amount = ingredientDetails.quantity.amount;
    this.unit = ingredientDetails.quantity.unit;
    this.costInCentsPerUnit = 0;
    this.ingredientCost = this.calculateCost();
  }

  retrieveData() {
    let ingredient = ingredientsDataBase.find(ingredient => (ingredient.id === this.id));
    this.name = ingredient.name;
    this.costInCentsPerUnit = ingredient.estimatedCostInCents;
  }

  calculateCost() {
    this.ingredientCost = (this.costInCentsPerUnit * this.amount) / 100;
    return this.ingredientCost;
  }
}