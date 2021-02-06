const Post = require('../Models/Post');

const create = function(req, res) {
    Post.findById(req.params.postId, (err, foundPost) => {
        if (err) return console.log(err);
        foundPost.comments.push(req.body);
        foundPost.save();
        res.redirect('/');
    });
};

const show = function(req, res) {
    res.render('comments');
};

const commentForm = function(req, res) {
    Post.findById(req.params.postId, (err, foundPost) => {
        if (err) return console.log(err);
        const context = {
            postId: foundPost._id,
        };
        res.render('comments', context);
    });
};


module.exports = {
    create,
    show,
    commentForm,
};