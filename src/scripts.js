import './styles.css';
// import apiCalls from './apiCalls';
import DataManager from './classes/DataManager';
import recipeData from './data/recipes';
import ingredientsData from './data/ingredients'
import FormManager from './classes/FormManager';
import FormHandler from './classes/FormHandler';
import RecipeManager from './classes/RecipeManager';
// import users from './data/users';

// Classes Instances
const dataManager = new DataManager();
dataManager.setRecipes(recipeData);
dataManager.setIngredients(ingredientsData);
const recipeManager = new RecipeManager(dataManager.ingredients);
const formHandler = new FormHandler(dataManager);
const formManager = new FormManager('user-search', dataManager.filterRecipes.bind(dataManager), dataManager, recipeManager);
const allRecipes = recipeManager.createRecipeInstances(dataManager.recipes);

// DOM elements
const searchBar = document.getElementById('searchBarInput');

const exploreNavBtn = document.getElementById('exploreNav');
console.log(exploreNavBtn);
const favoritesNavBtn = document.getElementById('favoritesNav');
const wantToCookNavBtn = document.getElementById('wantToCookNav'); 
const mainScreen = document.getElementById('mainScreen');
const favoritesView = document.getElementById('favoritesView');
const favoriteRecipes = document.getElementById('favorite-recipes');
const wantToCookView = document.getElementById('wantToCookView');
const wantToCookRecipes = document.getElementById('want-to-cook-recipes');
const filteredRecipesView = document.getElementById('filteredRecipesView');
const filteredRecipesResults = document.getElementById('filtered-search-results')
const recipeView = document.getElementById('recipeView');
const popularRecipes = document.getElementById('randomPopularRecipes');

//Event Handlers

const displaySearch = (event) => {
  hide(mainScreen);
  hide(favoritesView);
  hide(wantToCookView);
  hide(recipeView);
  show(filteredRecipesView)
  filteredRecipesResults.innerHTML = '';
  
  allRecipes.forEach((recipe) => {
  
    filteredRecipesResults.insertAdjacentHTML('beforeend', `
    <div class="recipe-card2">
          <div class="recipe-card2-image-container">
            <img class="card2-img" src=${recipe.image}>
          </div>
          <div class="recipe-card2-body">
            <h4 class="card2-name">${recipe.name}</h4>
            <div class="card2-recipe-tags">
              <button class="pill-button2">${recipe.tags[0]}</button>
              <button class="pill-button2">${recipe.tags[1]}</button>
              <button class="pill-button2">${recipe.tags[2]}</button>
            </div>
            <p class="ingredients-cost1">${recipe.totalCost}</p>
          </div>
        </div>
        `)
  })
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

// Event Listeners
exploreNavBtn.addEventListener('click', displaySearch);
favorites.addEventListener('click', showFavorites);
wantToCook.addEventListener('click', showWantToCook);
popularRecipes.addEventListener('click', renderRecipe);
wantToCookSection.addEventListener('click', renderRecipe);
filteredRecipesSection.addEventListener('click', renderRecipe);
recipeView.addEventListener('click', saveRecipe);