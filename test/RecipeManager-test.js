import { assert } from 'chai';
import { ingredientsDataBase, recipeDetails1, recipeDetails2 } from '../src/data/dataTestRecipe';
import RecipeManager from '../src/classes/RecipeManager';
import Recipe from '../src/classes/Recipe';

describe.only('Recipe Manager', function() {
  let recipeManager;
  let filteredRecipes;
  let recipe1;
  let recipe2;

  beforeEach(function() {
    recipeManager = new RecipeManager(ingredientsDataBase);
    filteredRecipes = [recipeDetails1, recipeDetails2];
    recipe1 = new Recipe(recipeDetails1, ingredientsDataBase);
    recipe2 = new Recipe(recipeDetails2, ingredientsDataBase);
  });

  it('should store a reference to the ingredients in the data manager', function() {
    assert.deepEqual(recipeManager.ingredientDB, ingredientsDataBase);
  });

  it('should start with no recipes', function() {
    assert.deepEqual(recipeManager.filteredRecipes, []);
  });

  it('should store filtered recipes', function() {
    recipeManager.storeFilteredRecipes(filteredRecipes)
    assert.deepEqual(recipeManager.filteredRecipes, [recipeDetails1, recipeDetails2]);
  });

  it('should create a instance of recipe class for each filtered recipe', function() {
    recipeManager.storeFilteredRecipes(filteredRecipes);
    recipeManager.createRecipeInstances();
    assert.deepEqual(recipeManager.filteredRecipes, [recipe1, recipe2]);
  });
});