const mongoose = require('../db/mongoose');

// User Model

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

const newUser = new User({ email: 'prakritisaxena@gmail.com' });

newUser.save().then((doc) => {
    console.log('Saved user', doc);
}, (e) => {
    console.log('Unable to save user');
});

module.exports = { User };