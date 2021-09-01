const emptyArray = [];

export default class DataManager {
  constructor() {
    this.recipes = emptyArray;
    this.ingredients = emptyArray;
    this.tags = emptyArray;
    this.filteredRecipes = emptyArray;
  }

  setRecipes(recipes) {
    this.recipes = recipes;
    this.setTags();
  }

  setIngredients(ingredients) {
    this.ingredients = ingredients;
  }

  setTags() {
    this.tags = this.recipes.map((element) => {return element.tags}).flat();
    this.tags = this.tags.reduce((accumulator, tag) => {
      !accumulator.includes(tag) && accumulator.push(tag);
      return accumulator;
    }, []);
  }

  checkForArrayMatch(comparisonArray) {
    return (targetString) => {
      if (targetString.includes(comparisonArray)) {
        return true;
      } else {
        return false;
      }
    } 
  }

  filterRecipes(sortedSearch) {
    
    this.filteredRecipes = this.recipes.filter(recipe => {
      let hasTag = false;
      let hasKeyword = false;
      let hasIngredient = false;

      

      if(sortedSearch.tags.length) {
        hasTag = recipe.tags.some(this.checkForArrayMatch(sortedSearch.tags));
      }
      
      if(sortedSearch.keywords.length) {
        hasKeyword = recipe.name.includes(this.checkForArrayMatch(sortedSearch.keywords));
        // hasIngredient = recipe.ingredients.some(checkForArraymatch(sortedSearch.ingredients));
      }
      return hasTag || hasKeyword || hasIngredient;
    })
  }

}    