const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();

const users = [{
  _id: new ObjectID(),
  email: 'lwnash45@gmail.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneID.toHexString(), email: 'lwnash45@gmail.com', access: 'auth'}, '#GoHawks45').toString()
  }]
}, {
  _id: userTwoID,
  email:'jen@example.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: 'shdhdjf'
  }]
}]

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {

    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers}
