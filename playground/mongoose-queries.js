const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoID = '5b6b6306b35d6e244ae97e7a';
var userID = '5b68ae521dd38e0c24324f36';

if (!ObjectID.isValid(todoID)) {
    console.log('ID not valid')
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.find({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

Todo.findById(todoID).then((todo) => {
    if (!todo) {
        return console.log('ID not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log('User by id', user);
}, (e) => {
  (e) => console.log(e)
})
