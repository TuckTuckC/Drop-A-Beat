const Post = require('../Models/Post')

const show = function(req, res) {
    res.render('newpost', {
        user: req.user,
    });
};
const create = function(req, res) {
    console.log(req.body, 'req.body');
    Post.create(req.body, (err, createdPost) => {res.redirect('/')});
};

module.exports = {
    show,
    create,
};