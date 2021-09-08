

export default class User {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.pantry = userDetails.pantry;
    this.favoriteRecipes = [];
    this.wantToCook = [];
  }
}