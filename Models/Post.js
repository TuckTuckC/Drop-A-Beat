const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    caption: String,
});

module.exports = mongoose.model('Post', postSchema, 'posts');