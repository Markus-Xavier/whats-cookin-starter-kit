import './styles.css';
// import apiCalls from './apiCalls';
import DataManager from './classes/DataManager';
import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
import FormManager from './classes/FormManager';
import FormHandler from './classes/FormHandler';
import RecipeManager from './classes/RecipeManager';

// Classes Instances
const dataManager = new DataManager();
dataManager.setRecipes(recipeData);
dataManager.setIngredients(ingredientsData);
const recipeManager = new RecipeManager(dataManager.ingredients);
const formHandler = new FormHandler(dataManager);
const formManager = new FormManager('user-search', dataManager.filterRecipes.bind(dataManager), dataManager, recipeManager);
const allRecipes = recipeManager.createRecipeInstances(dataManager.recipes);


// DOM elements
const whatsCookinLogo = document.querySelector('.header-logo');
const exploreNavBtn = document.getElementById('exploreNav');
const favoritesNavBtn = document.getElementById('favoritesNav');
const wantToCookNavBtn = document.getElementById('wantToCookNav'); 
const mainScreen = document.getElementById('mainScreen');
const popularRecipesCarousel = document.getElementById('randomPopularRecipesCarousel');
const favoritesView = document.getElementById('favoritesView');
const wantToCookView = document.getElementById('wantToCookView');
const filteredRecipesView = document.getElementById('filteredRecipesView');
const recipeView = document.getElementById('recipeInfo');
const searchBar = document.getElementById('searchBarInput');
const pageViewHeading = document.querySelector('.heading');
const favoriteRecipesResults = document.getElementById('favorite-recipes');
const wantToCookRecipesResults = document.getElementById('want-to-cook-recipes');
const filteredRecipesResults = document.getElementById('filtered-search-results')


//Event Handlers
const showAndHideClasses = (view) => {
  hide(mainScreen);
  hide(wantToCookView);
  hide(recipeView);
  hide(filteredRecipesView)
  hide(recipeView);
  hide(favoritesView);
  show(view);
}

const updatePageViewHeading = (heading) => {
  pageViewHeading.innerText = heading;
}

const renderRecipe = (recipeList, parentHTMLSection) => {
  parentHTMLsection.innerHTML = '';

  recipeList.forEach((recipe) => {
    parentHTMLSection.insertAdjacentHTML('beforeend', `
    <div class="recipe-card1">
      <img src=${recipeList.image}>
        <h4>${recipeList.name}</h4>
        <div class="recipe-tags1">
          <button class="pill-button2">${recipeList.tags[0]}</button>
          <button class="pill-button2">${recipeList.tags[1]}</button>
          <button class="pill-button2">${recipeList.tags[2]}</button>
        </div>
    </div>
    `)
  })
}


const showView = (view, heading, recipeList, parentHTMLSection) => {
showAndHideClasses(view);
updatePageViewHeading(heading);
renderRecipe(recipeList, parentHTMLSection);
};

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

const generateRandomRecipes = () => {
    const randomRecipes = allRecipes.reduce((acc, recipe) => {
    (acc.length < 8) && acc.push(allRecipies[getRandomIndex(allRecipes)]);
    return acc;
  }, []);
    return randomRecipes;
  };
  

//Helper functions

const hide = (element) => element.classList.add('hidden');
const show = (element) => element.classList.remove('hidden');

// Event Listeners
whatsCookinLogo.addEventListener('click', function () {
  showView(mainScreen, 'Popular Recipes', generateRandomRecipes(), popularRecipesCarousel)
});
// exploreNavBtn.addEventListener('click',);
// favoritesNavBtn.addEventListener('click', showView);
// wantToCookNavBtn.addEventListener('click', showView);
// popularRecipes.addEventListener('click', renderRecipe);
// wantToCookSection.addEventListener('click', renderRecipe);
// filteredRecipesSection.addEventListener('click', renderRecipe);
