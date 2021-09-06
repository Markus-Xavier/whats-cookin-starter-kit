import './styles.css';
import apiCalls from './apiCalls';
import DataManager from './classes/DataManager';
import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
import FormManager from './classes/FormManager';
import FormHandler from './classes/FormHandler';
import Ingredient from './classes/Ingredient';
import Recipe from './classes/Recipe';
import users from './data/users';

// DOM elements

const explore = document.getElementById('exploreNav');
const favorites = document.getElementById('favoritesNav');
const wantToCook = document.getElementById('wantToCookNav');
const popularRecipes = document.getElementById('randomPopularRecipes');
const wantToCookSection = document.getElementById('wantToCook');
const filteredRecipesSection = document.getElementById('filteredRecipes');
const recipeView = document.getElementById('recipeView');
const searchBar = document.getElementById('searchBarInput');

// Classes Instances

const dataBase = new DataManager();
const formHandler = new FormHandler();
const formManager = new FormManager();
dataBase.setRecipes(recipeData);
dataBase.setIngredients(ingredientsData);
dataBase.setTags();

// Event Listeners

explore.addEventListener('click', displaySearch);
favorites.addEventListener('click', showFavorites);
wantToCook.addEventListener('click', showWantToCook);
searchBar.addEventListener('keypress', filterData);
popularRecipes.addEventListener('click', renderRecipe);
wantToCookSection.addEventListener('click', renderRecipe);
filteredRecipesSection.addEventListener('click', renderRecipe);
recipeView.addEventListener('click', saveRecipe);

//Event Handlers

const filterData = (event) => {
  if (event.key === 'Enter') {
    // Do this
  }
}

const displaySearch = (event) => {
  //Do something
}

const showFavorites = (event) => {
  //Do something
}

const showWantToCook = (event) => {
  //Do something
}

const renderRecipe = (event) => {
  //Do something
}

const saveRecipe = (event) => {
  //Do something
}


// Helper functions

const hide = (element) => element.classList.add('hidden');
const show = (element) => element.classList.remove('hidden');
