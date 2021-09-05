/* eslint-disable max-len */

export default class Ingredient {
  constructor(ingredientDetails, ingredientsDataBase) {
    this.ingredientsDataBase = ingredientsDataBase;
    this.id = ingredientDetails.id;
    this.name = this.setName();
    this.amount = ingredientDetails.quantity.amount;
    this.unit = ingredientDetails.quantity.unit;
    this.costInCentsPerUnit = this.setCostInCentsPerUnit();
    this.ingredientCost = this.calculateCost();
  }

  setName() {
    let ingredient = this.ingredientsDataBase.find(ingredient => (ingredient.id === this.id));
    if (!ingredient) {
      let ingredientName = 'Unknown Ingredient';
      return ingredientName;
    } 
    return ingredient.name;
  }

  setCostInCentsPerUnit() {
    let ingredient = this.ingredientsDataBase.find(ingredient => (ingredient.id === this.id));
    if (!ingredient) {
      let price = 0;
      return price;
    }
    return ingredient.estimatedCostInCents;
  }

  calculateCost() {
    return (this.costInCentsPerUnit * this.amount) / 100;
  }
}