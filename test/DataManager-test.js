import { assert } from 'chai';
import DataManager from '../src/classes/DataManager';
import recipes from '../src/data/recipes';
import ingredients from '../src/data/ingredients';
// import { recipeTags } from './DataManagerTestDatabase';
import { testRecipes } from './DataManagerTestDatabase';
import { userInput } from './DataManagerTestDatabase';
import { userInput2 } from './DataManagerTestDatabase';
import { userInput3 } from './DataManagerTestDatabase';
import { userInput4 } from './DataManagerTestDatabase';
import { filteredResultsByTag } from './DataManagerTestDatabase';
import { filteredResultsByKeywords } from './DataManagerTestDatabase';
import { filteredResultsByTagsAndKeywords } from './DataManagerTestDatabase';

describe('DataManager', function() {
  let dataManager;
  let user1;
  let user2;
  let userData;

  beforeEach(function() {
    dataManager = new DataManager();
    user1 = {name: 'Dog Boy', id: 1337, pantry: [{ingredient: 12345, amount: 10}]};
    user2 = {name: 'Cat Girl', id: 7331, pantry: [{ingredient: 54321, amount: 5}]};
    userData = [user1, user2];
  });

  it('Should be a function', function() {
    assert.isFunction(DataManager);
  });

  it('Should be an instance of DataManager', function() {
    assert.instanceOf(dataManager, DataManager);
  });
  
  it('should start with no recipes',  function() {
    assert.deepEqual(dataManager.recipes, []);
  });

  it('should store recipes', function() {
    dataManager.setRecipes(recipes);
    assert.deepEqual(dataManager.recipes, recipes)
  })

  it('should start off with no ingredients', function() {
    assert.deepEqual(dataManager.ingredients, []);
  });

  it('should store ingredients', function() {
    dataManager.setIngredients(ingredients);
    assert.deepEqual(dataManager.ingredients, ingredients);
  });

  it('should start off with no tags', function() {
    assert.deepEqual(dataManager.tags, []);
  });

  it('should store tags from recipes', function() {
    dataManager.setRecipes(recipes);
    assert.deepEqual(dataManager.tags, [
      'antipasti', 'starter',
      'snack', 'appetizer',
      'antipasto', "hor d'oeuvre",
      'lunch', 'main course',
      'main dish', 'dinner',
      'sauce', 'side dish',
      'morning meal', 'brunch',
      'breakfast', 'salad',
      'condiment', 'dip',
      'spread'
    ]);
  });

  it('should return a list of recipes filtered by tags and keywords', function () {
    dataManager.setRecipes(testRecipes);
    dataManager.filterRecipes(userInput);

    assert.deepEqual(dataManager.filteredRecipes, filteredResultsByTagsAndKeywords)
  });

  it('should return a list of recipes filtered by keywords', function () {
    dataManager.setRecipes(testRecipes);
    dataManager.filterRecipes(userInput2);

    assert.deepEqual(dataManager.filteredRecipes, filteredResultsByKeywords)
  });

  it('should return a list of recipes filtered by tags', function() {
    dataManager.setRecipes(testRecipes);
    dataManager.filterRecipes(userInput3);

    assert.deepEqual(dataManager.filteredRecipes, filteredResultsByTag)
  });


  it('should check ingredients data and return a list of recipes with ingredients that match search keywords', function() {
    dataManager.setRecipes(testRecipes);
    dataManager.filterRecipes(userInput4);

    assert.deepEqual(dataManager.filteredRecipes, filteredResultsByKeywords);
  });

  it('should start with no users', function() {
    assert.deepEqual(dataManager.users, []);
  });

  it('should be able to store users', function() {
    dataManager.setUsers(userData);

    assert.deepEqual(dataManager.users, userData);
  });
});