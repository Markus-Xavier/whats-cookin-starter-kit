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
const whatsCookinLogo = document.querySelector('.header-logo');
const searchBar = document.getElementById('searchBarInput');

const exploreNavBtn = document.getElementById('exploreNav');
const favoritesNavBtn = document.getElementById('favoritesNav');
const wantToCookNavBtn = document.getElementById('wantToCookNav'); 
const mainScreen = document.getElementById('mainScreen');
const favoritesView = document.getElementById('favoritesView');
const favoriteRecipesResults = document.getElementById('favorite-recipes');
const wantToCookView = document.getElementById('wantToCookView');
const wantToCookRecipesResults = document.getElementById('want-to-cook-recipes');
const filteredRecipesView = document.getElementById('filteredRecipesView');
const filteredRecipesResults = document.getElementById('filtered-search-results')
const recipeView = document.getElementById('recipeInfo');
const popularRecipesCarousel = document.getElementById('randomPopularRecipesCarousel');
const pageViewHeading = document.querySelector('.heading');



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



// const showWantToCook = (event) => {
//   hide(mainScreen);
//   hide(recipeView);
//   hide(filteredRecipesView)
//   hide(favoritesView);
//   hide(wantToCookView);
//   show(recipeView);

//   wantToCookRecipesResults.innerHTML = '';

//   allWantToCookRecipes.forEach((recipe) => {
//     wantToCookRecipesResults.insertAdjacentHTML('beforeend', `
//         <div class="recipe-card2">
//           <div class="recipe-card2-image-container">
//             <img class="card2-img" src=${allWantToCookRecipes.image}>
//           </div>
//           <div class="recipe-card2-body">
//             <h4 class="card2-name">${allWantToCookRecipes.name}</h4>
//             <div class="card2-recipe-tags">
//               <button class="pill-button2">${allWantToCookRecipes.tags[0]}</button>
//               <button class="pill-button2">${allWantToCookRecipes.tags[1]}</button>
//               <button class="pill-button2">${allWantToCookRecipes.tags[2]}</button>
//             </div>
//             <p class="ingredients-cost1">${allWantToCookRecipes.totalCost}</p>
//           </div>
//         </div>
//     `)
//   })
// }

// const renderRecipe = (event) => {
//   popularRecipes.innerHTML = '';

//   randomPopularRecipes.forEach((recipe) => {
//     popularRecipes.insertAdjacentHTML('beforeend', `
//     <div class="recipe-card1" id=">
//       <img src=${randomPopularRecipes.image}>
//         <h4>Recipe name</h4>
//         <div class="recipe-tags1">Tags</div>
//         <p class="recipe-desc1">Description</p>
//     </div>
//     `)
//   })
// }

// const showRecipe = (event) => {
//   hide(mainScreen);
//   hide(recipeView);
//   hide(filteredRecipesView)
//   hide(favoritesView);
//   hide(wantToCookView);
//   show(recipeView);

//   recipeView.insertAdjacentHTML('beforeend', `
//   <section class="recipe-view__container__2">
//     <div class="back-to-explore">
//       <p>← BACK TO EXPLORE</p>
//     </div>
//     <img class="img-recipe" src="assets/images/spaghetti.jpeg">
//       <div class="actions">
//         <p id="addRecipesToFavorites">✩ Favorite</p>
//         <p id="addRecipesToFavorites">+ Want to Cook</p>
//       </div>
//       </section>
//     <section class="recipe-view__container__3">
//       <div class="recipe-details">
//         <h3 class="recipe-title">Spaghetti & Meatballs</h3>
//         <p class="recipe-tags">tags: #meat #main #italian #sauce</p>
//       </div>
//       <div>
//         <h4 class="ingredients-cost">Ingredients Cost $10.00</h4>
//       </div>
//     </section>
//     <section class="recipe-view__container__4">
//       <section class="ingredients-list">
//         <h3 class="ingedients-title">Ingredients</h3>
//         <ul>
//           <li>Cheese 0.5 cups</li>
//           <li>Pasta 1 cup</li>
//           <li>Ground beef 1 cup</li>
//           <li>Tomato sauce 2 cups</li>
//         </ul>
//       </section>
//       <section class="instructions-list">
//         <h3 class="instructions-tittle">Instructions</h3>
//         <ol class="instructions-steps">
//           <li>Cook the beef with the garlic</>
//           <li>Blend the tomatoes and cook them until reduced</li>
//           <li>Add salt and pepper </li>
//           <li>Mix with the cooked pasta</li>
//         </ol>
//       </section>
//     </section>
// }`
//   )


// Helper functions
const hide = (element) => element.classList.add('hidden');
const show = (element) => element.classList.remove('hidden');

// Event Listeners
// exploreNavBtn.addEventListener('click',);


// favoritesNavBtn.addEventListener('click', showView);
// wantToCookNavBtn.addEventListener('click', showView);
  whatsCookinLogo.addEventListener('click', function () {
    showView(mainScreen, 'Popular Recipes', generateRandomRecipes(), popularRecipesCarousel)
  });

// popularRecipes.addEventListener('click', renderRecipe);

// wantToCookSection.addEventListener('click', renderRecipe);
// filteredRecipesSection.addEventListener('click', renderRecipe);