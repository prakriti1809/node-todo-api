const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5b711b235272c9337c78a9e0') },
        {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: false
        }

    ).then((result) => {
        console.log('Result: ', result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b15138ff7c89304b3062836')
    },
        {
            $set: {
                name: 'Andrew',
            },
            $inc: {
                age: 2,
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
        console.log('Result: ', result);
    });

    // db.close();
});