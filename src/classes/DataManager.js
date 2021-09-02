/* eslint-disable max-len */
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
    this.tags = this.recipes.map((element) => element.tags).flat();
    this.tags = this.tags.reduce((accumulator, tag) => {
      !accumulator.includes(tag) && accumulator.push(tag);
      return accumulator;
    }, []);
  }

  checkForMatch(searchQuery) {
    return (targetString) => {
      if (targetString.includes(searchQuery)) {
        return true;
      } else {
        return false;
      }
    } 
  }

  checkForKeywordsInName(recipe, searchQuery) {
    const hasKeyword = searchQuery.keywords.map(keyword => {
      return recipe.name.includes(keyword);
    })
    if (hasKeyword.indexOf(true) > -1) {
      return true;
    } else {
      return false;
    }
  }
  
  returnIngredientIds(sortedSearch) {
    this.ingredients
  }
  checkForKeywordsInIngredients(
    //get ID of ingredietn from keyword
  )

  filterRecipes(sortedSearch) {
    
    this.filteredRecipes = this.recipes.filter(recipe => {
      let isTagIncluded = false;
      let isKeywordIncluded = false;
      let isIngredientIncluded = false;

      if (sortedSearch.tags.length) {
        isTagIncluded = recipe.tags.some(this.checkForMatch(sortedSearch.tags));        
      }
      
      if (sortedSearch.keywords.length) {
        isKeywordIncluded = this.checkForKeywordsInName(recipe, sortedSearch);
        
        isIngredientIncluded = recipe.ingredients.some(this.checkForMatch(sortedSearch.ingredients));
      }
      return isTagIncluded || isKeywordIncluded || isIngredientIncluded;
    })
  }

}    