/* eslint-disable max-len */
import { assert } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import { ingredientsDataBase } from '../src/data/dataTestRecipe';
import { recipeDetails1 } from '../src/data/dataTestRecipe';
import { recipeDetails2 } from '../src/data/dataTestRecipe';

describe.only('Recipe', function() {
  let  recipe1, recipe2;
  beforeEach(function() {
    recipe1 = new Recipe(recipeDetails1, ingredientsDataBase);
    recipe2 = new Recipe(recipeDetails2, ingredientsDataBase);
  })
  it('should be a function', function() {
    assert.isFunction(Recipe);
    assert.instanceOf(recipe1, Recipe);
    assert.instanceOf(recipe2, Recipe);
  })

  it('should have an id property', function() {
    assert.equal(recipe1.id, 595736);
    assert.equal(recipe2.id, 678353);
  })

  it('should have an image property', function() {
    assert.equal(recipe1.image, 'https://spoonacular.com/recipeImages/595736-556x370.jpg');
    assert.equal(recipe2.image, 'https://spoonacular.com/recipeImages/678353-556x370.jpg');
  })

  it('should have a instructions property', function() {
    assert.deepEqual(recipe1.instructions, recipeDetails1.instructions);
    assert.deepEqual(recipe2.instructions, recipeDetails2.instructions);
  })

  it('should have a name', function() {
    assert.equal(recipe1.name, 'Loaded Chocolate Chip Pudding Cookie Cups');
    assert.equal(recipe2.name, 'Maple Dijon Apple Cider Grilled Pork Chops');
  })

  it('should have a tags property', function() {
    assert.equal(recipe1.tags, recipeDetails1.tags);
    assert.equal(recipe2.tags, recipeDetails2.tags);
  })

  it('should have a recipe ingredients property', function() {
    assert.equal(recipe1.recipeIngredients, recipeDetails1.ingredients);
    assert.equal(recipe2.recipeIngredients, recipeDetails2.ingredients);
  })

  it('should have a method to process the ingredients', function() {
    
    assert.equal(recipe1.processedIngredients.length, recipeDetails1.ingredients.length);
    assert.equal(recipe2.processedIngredients.length, recipeDetails2.ingredients.length);
    assert.instanceOf(recipe1.processedIngredients[0], Ingredient)
    assert.equal(recipe1.processedIngredients[0].name, 'wheat flour');
    assert.instanceOf(recipe2.processedIngredients[0], Ingredient)
    assert.equal(recipe2.processedIngredients[0].name, 'apple cider');
  })

})