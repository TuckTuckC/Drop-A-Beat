const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    caption: String,
    username: req.user.name,
});

module.exports = mongoose.model('post', postSchema);