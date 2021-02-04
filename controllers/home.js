const Post = require('../Models/Post');

const show = function(req, res) {
        Post.find({}).populate('user').exec( function(err, posts) {
            if (err) {return console.log(err)};
            const context = {
                posts,
                user: req.user || false,
            };
            console.log(posts);
            res.render('home', context);
        });
    };

module.exports = {
    show,
};