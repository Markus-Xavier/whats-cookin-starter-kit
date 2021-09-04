import { assert } from 'chai';
import User from '../src/classes/User';

describe.only('User', function() {
  let user1, user2;

  beforeEach(function() {
    user1 = new User()
    user2 = new User()
  })

  it('should be a function', function() {
    assert.isFunction(User);
    assert.instanceOf(user1, User);
    assert.instanceOf(user2, User);
  })

  it('should have an Id property', function() {
    assert.isNumber(user1.Id);
    assert.isNumber(user2.id);
  })

  it('should have a favorite recipes property', function() {
    assert.deepEqual(user1.favoriteRecipes, []);
    assert.deepEqual(user2.favoriteRecipes, []);
  })

  it('should have a wants to cook property', function() {
    assert.deepEqual(user1.wanToCook, []);
    assert.deepEqual(user2.wantToCook, []);
  })
})