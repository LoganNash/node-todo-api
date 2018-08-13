const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

Todo.findOneAndRemove('5b71e3288a6439a859052bbb').then((todo) => {
  console.log(todo);
})
