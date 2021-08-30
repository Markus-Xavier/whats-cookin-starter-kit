import { assert } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', function() {
  beforeEach( () => {
    const ingredientData = {
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    };
    const ingredientData2 = {
      "id": 18372,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    };  
    const ingredient1 = new Ingredient(ingredientData);
    const ingredient2 = new Ingredient(ingredientData2);
  })

  it('should be a function', function() {
    assert.isFunction(Ingredient);
    assert.instanceOf(ingredient1, Ingredient);
  })

  it('should have an id property', function() {
    assert.equal(ingredient1.id, 20081);
    assert.equal(ingredient2.id, 18372);
  })

  it('should have a name property', function() {
    assert.equal(ingredient1.name, 'wheat flour');
    assert.equal(ingredient2.name, 'bicarbonate of soda');
  })

  it('should have an amount property', function() {
    assert.equal(ingredient1.amount, 1.5);
    assert.equal(ingredient2.amount, 0.5);
  })

  it('should have a unit property', function() {
    assert.equal(ingredient1.unit, 'c');
    assert.equal(ingredient2.unit, 'tsp');
  })

  it('should have a cost property', function() {
    assert.equal(ingredient1.costInCentsPerUnit, 142);
    assert.equal(ingredient2.costInCentsPerUnit, 582);
  })

  it('should have a method that retrieves the data from the database', function() {
    assert.equal(ingredient1.retrieveName(), 'wheat flour');
    assert.equal(ingredient2.retrieveName(), 'bicarbonate of soda');
  })

  it('should have a method that calculates it\'s own cost', function() {
    assert.equal(ingredient1.calculateCost(), 0.213);
    assert.equal(ingredient2.calculateCost(), 0.291);
  })


})