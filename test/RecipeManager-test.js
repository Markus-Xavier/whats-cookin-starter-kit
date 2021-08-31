import { assert } from 'chai';
import RecipeManager from '../src/classes/RecipeRepository';


describe('Recipe Manager', function() {
  let recipeManager;
  
  beforeEach(function() {
    recipeManager = new RecipeManager();
  });

  it('should start with no recipes', function() {

    assert.equal(recipeManager.filteredRecipes, null);
  });

  it('should store filtered recipes', function() {
    
  });

  it('should create a instance of recipe class for each filtered recipe', function() {
    
  });
});