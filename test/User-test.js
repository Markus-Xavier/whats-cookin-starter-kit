import { assert } from 'chai';
import User from '../src/classes/User';
import users from '../src/data/userDataTest';

describe.only('User', function() {
  let user1, user2;

  beforeEach(function() {
    user1 = new User(users[0]);
    user2 = new User(users[1]);
  })

  it('should be a function', function() {
    assert.isFunction(User);
    assert.instanceOf(user1, User);
    assert.instanceOf(user2, User);
  })

  it('should have an Id property', function() {
    assert.equal(user1.id, 1);
    assert.equal(user2.id, 2);
  })

  it('should have a name', function() {
    assert.equal(user1.name, "Saige O'Kon");
    assert.equal(user2.name, 'Ephraim Goyette');
  })

  it('should have a pantry', function() {
    assert.isArray(user1.pantry);
    assert.isArray(user2.pantry);
  })

  it('should have a favorite recipes property', function() {
    assert.deepEqual(user1.favoriteRecipes, []);
    assert.deepEqual(user2.favoriteRecipes, []);
  })

  it('should have a wants to cook property', function() {
    assert.deepEqual(user1.wantToCook, []);
    assert.deepEqual(user2.wantToCook, []);
  })
})