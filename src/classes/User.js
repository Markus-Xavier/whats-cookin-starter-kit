/*
The User class should have a property to store favorite recipes
It should have a property to store recipes to cook
It should have an ID
*/

export default class User {
  constructor() {
    this.id = Date.now();
    this.favoriteRecipes = [];
    this.wantToCook = [];
  }
}