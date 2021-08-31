import { assert } from 'chai';
import FormHandler from '../src/classes/FormHandler.js';

describe('Form Handler', function () {
  let dataManager;
  let formHandler;

  beforeEach(function () {
    dataManager = {
      tags: ['DOG', 'BIRD']
    };
    formHandler = new FormHandler(dataManager);
  });

  it('should have reference to the data manager', function () {
    assert.deepEqual(formHandler.dataManager, dataManager);
  });

  it('should take an array and sort each item', function () {
    assert.deepEqual(formHandler.sortUserSearch(['Dog', 'Cat', 'Bird']), { tags: ['dog', 'bird'], keyWords: ['cat'] });
  });

  it('should take a case insensitive array', function () {
    assert.deepEqual(formHandler.sortUserSearch(['dOg', 'cat', 'bIrD']), { tags: ['dog', 'bird'], keyWords: ['cat'] });
  });
});