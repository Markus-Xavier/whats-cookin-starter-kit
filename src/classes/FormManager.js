import recipeData from "../data/recipes";
import FormHandler from "./FormHandler";
export default class FormManager {
  constructor(formName, callBack, dataManager, recipeManager) {
    this.form = document.querySelector(`form[name="${formName}"]`);
    this.formHandler = new FormHandler(dataManager);
    this.recipeManager = recipeManager;
    this.callBack = callBack;
    this.initialize();
  }

  initialize() {
    this.form.onsubmit = this.submitEvent.bind(this);
  }

  reset() {
    this.form.reset();
  }

  submitEvent(event) {
    event.preventDefault();
    let searchQuery = '';

    for (const pair of new FormData(event.target)) {
      const filteredString = pair[1].replace(/[^a-z]/gi, ' ');
      searchQuery += ' ' + filteredString;
    }

    const sortedSearch = this.formHandler.sortUserSearch(searchQuery.split(' '));
    sortedSearch.keywords.splice(0, 1);
    sortedSearch.ingredients.splice(0, 1);
    const filteredRecipes = this.callBack(sortedSearch);
    this.recipeManager.createRecipeInstances(filteredRecipes);
    return false;
  }
}