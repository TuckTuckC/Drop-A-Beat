const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],
    beatboxers: [],
    googleId: String,
});

module.exports = mongoose.model('user', userSchema, 'users');