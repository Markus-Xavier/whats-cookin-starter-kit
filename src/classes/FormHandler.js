export default class FormHandler {
  constructor(dataManager) {
    this.dataManager = dataManager;
  }

  getIngredientID (targetString) {
    const ingredientID = this.dataManager.ingredients.reduce((accumulator, ingredient) => {
      if (!!ingredient.name && ingredient.name.toLowerCase().includes(targetString)) {
        accumulator.push(ingredient.id); 
      }
      return accumulator;
    }, [])
    return ingredientID;
  }

  sortUserSearch(listOfWords) {
    return listOfWords.reduce((sortedWords, word) => {
      if (this.dataManager.tags.indexOf(word.toLowerCase()) > -1) {
        sortedWords.tags.push(word.toLowerCase());
      } else {
        sortedWords.keywords.push(word.toLowerCase());
        const ingredientID = this.getIngredientID(word.toLowerCase());
        (ingredientID && !sortedWords.ingredients.includes(ingredientID)) && (sortedWords.ingredients.push(ingredientID));
      }
      return sortedWords;
    }, {
      tags: [],
      keywords: [],
      ingredients: []
    });
  }
}