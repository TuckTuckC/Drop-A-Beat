const show = function(req, res) {
    res.render('profile', {
        user: req.user,
    });
};

module.exports = {
    show,
};