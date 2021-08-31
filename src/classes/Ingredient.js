

export default class Ingredient {
  constructor(ingredientDetails) {
    this.id = ingredientDetails.id;
    this.name = 'null';
    this.amount = ingredientDetails.quantity.amount;
    this.unit = ingredientDetails.quantity.unit;
    this.ingredientCost = 0;
  }

  retrieveData(dataBase) {
    let ingredient = dataBase.find(ingredient => (ingredient.id === this.id));
    this.name = ingredient.name;
    this.costInCentsPerUnit = ingredient.estimatedCostInCents;
  }

  calculateCost() {
    this.ingredientCost = (this.costInCentsPerUnit * this.amount) / 100;
    return this.ingredientCost;
  }
}