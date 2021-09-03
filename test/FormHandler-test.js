import { assert } from 'chai';
import FormHandler from '../src/classes/FormHandler.js';

describe('Form Handler', function () {
  let dataManager;
  let formHandler;

  beforeEach(function () {
    dataManager = {
      tags: ['dog', 'bird'],
      ingredients: [{
        id: 12345,
        name: 'wheat flour'
      },
      {
        id: 54321,
        name: 'pork'
      },
      {
        id: 13577,
        name: 'potato'
      }]
    };
    formHandler = new FormHandler(dataManager);
  });

  it('should have reference to the data manager', function () {
    assert.deepEqual(formHandler.dataManager, dataManager);
  });

  it('should take an array and sort each item', function () {
    assert.deepEqual(formHandler.sortUserSearch(['Dog', 'Cat', 'Bird']), { tags: ['dog', 'bird'], keywords: ['cat'], ingredients: []});
  });

  it('should take an ingredient and give back its id', function() {
    // eslint-disable-next-line max-len
    assert.deepEqual(formHandler.sortUserSearch(['Dog', 'Cat', 'Bird', 'Wheat', 'Flour']), { tags: ['dog', 'bird'], keywords: ['cat', 'wheat', 'flour'], ingredients: [12345]});
  })

  it('should take a case insensitive array', function () {
    assert.deepEqual(formHandler.sortUserSearch(['dOg', 'cat', 'bIrD']), { tags: ['dog', 'bird'], keywords: ['cat'], ingredients: []});
  });
});