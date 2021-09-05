/* eslint-disable max-len */
import { assert } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import {ingredientsDataBase} from '../src/data/dataTestRecipe';

describe('Ingredient', function() {
  let ingredientData, ingredientData2, ingredient1, ingredient2;

  beforeEach(function() {
    ingredientData = {"id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    };
    ingredientData2 = {
      "id": 18372,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }; 
    ingredient1 = new Ingredient(ingredientData, ingredientsDataBase);
    ingredient2 = new Ingredient(ingredientData2, ingredientsDataBase);
  })

  it('should be a function', function() {
    assert.isFunction(Ingredient);
    assert.instanceOf(ingredient1, Ingredient);
    assert.instanceOf(ingredient2, Ingredient);
  })

  it('should have an id property', function() {
    assert.equal(ingredient1.id, 20081);
    assert.equal(ingredient2.id, 18372);
  })

  it('should have an amount property', function() {
    assert.equal(ingredient1.amount, 1.5);
    assert.equal(ingredient2.amount, 0.5);
  })

  it('should have a unit property', function() {
    assert.equal(ingredient1.unit, 'c');
    assert.equal(ingredient2.unit, 'tsp');
  })

  it('should have a method that retrieves the name from the data manager', function() {
    assert.equal(ingredient1.name, 'wheat flour');
    assert.equal(ingredient2.name, 'bicarbonate of soda');
  })

  it('should have a method that retrieves the cost in cents per unit from the data manager', function() {
    assert.equal(ingredient1.costInCentsPerUnit, 142);
    assert.equal(ingredient2.costInCentsPerUnit, 582);
  })

  it('should have a method that calculates it\'s own cost', function() {
    
    assert.equal(ingredient1.ingredientCost, 2.13);
    assert.equal(ingredient2.ingredientCost, 2.91);
  })

  it('should give default information if it cannot find the ingredient', function() {
    let ingredientData3 = {
      "id": 0,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    };
    let ingredient3 = new Ingredient(ingredientData3, ingredientsDataBase);
    assert.equal(ingredient3.name, 'Unknown Ingredient');
    assert.equal(ingredient3.ingredientCost, 0);
  })
})