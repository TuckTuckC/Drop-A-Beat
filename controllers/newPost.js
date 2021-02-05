const Post = require('../Models/Post')

const show = function(req, res) {
    res.render('newpost', {
        user: req.user,
    });
};
const create = function(req, res) {
    console.log(req.body, 'req.body');
    req.body.user = req.user._id;
    Post.create(req.body, (err, createdPost) => {
        if (err) {return console.log(err)}
        req.user.posts.push(createdPost);
        req.user.save(function(err) {
            res.redirect('/')
        });
    });
};

module.exports = {
    show,
    create,
};