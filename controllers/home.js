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

const delPost = function(req, res, next) {
    console.log('req.params.id', req.params.id);
    Post.findByIdAndDelete(req.params.id, (err) => {
        if (err) console.log(err);
        res.redirect('/');
    });
};

module.exports = {
    show,
    delPost,
};