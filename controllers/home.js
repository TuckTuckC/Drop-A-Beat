const Post = require('../Models/Post');

const show = function(req, res) {
        Post.find({}).populate('users').exec( function(err, posts) {
            const context = {
                posts,
                user: posts.user || false,
            };
            console.log(posts);
            res.render('home', context)
        });
    };

module.exports = {
    show,
};