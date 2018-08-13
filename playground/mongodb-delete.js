const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').deleteMany({ text: 'Something to do - Item 2' }).then((result) => {
        console.log('Result: ', result);
    });

    db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
        console.log('Result: ', result);
    });

    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log('Result: ', result);
    });
    // db.close();
});