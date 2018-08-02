//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
 
// var user = {name: 'logan', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    db.collection('Users').insertOne({
        name: 'Jean Segura',
        age: 22,
        location: 'Seattle'
    }, (err, result) => {
        if (err) {
            return console.log('Unbale to insert user', err);
        }
        console.log(results[0]);
    })

    db.close();
});