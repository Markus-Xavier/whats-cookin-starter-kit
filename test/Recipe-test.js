/* eslint-disable max-len */
import { assert } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';

describe('Recipe', function() {
  let recipeDetails1, recipeDetails2, recipe1, recipe2, dataBase;
  beforeEach(function() {
    dataBase = [{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    }];
    recipeDetails1 = {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    };
    recipeDetails2 = {
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "id": 1009016,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "clove"
          }
        },
        {
          "id": 1012046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 19911,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 16112,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 10010062,
          "quantity": {
            "amount": 24,
            "unit": "ounce"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    };
    recipe1 = new Recipe(recipeDetails1);
    recipe2 = new Recipe(recipeDetails2);
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
    recipe1.processIngredients(dataBase);
    recipe2.processIngredients(dataBase);
    assert.equal(recipe1.ingredients.length, recipeDetails1.ingredients.length);
    assert.equal(recipe2.ingredients.length, recipeDetails2.ingredients.length);
    assert.instanceOf(recipe1.ingredients[0], Ingredient)
    assert.deepEqual(recipe1.ingredients[0], {id: 20081, name: 'wheat flour', amount: 1.5, unit: 'c', costInCentsPerUnit: 142, ingredientCost: 2.13});
    assert.instanceOf(recipe2.ingredients[0], Ingredient)
    assert.deepEqual(recipe2.ingredients[0], {id: 18372, name: 'bicarbonate of soda', amount: 0.5, unit: 'tsp', costInCentsPerUnit: 582, ingredientCost: 2.91});
  })

})