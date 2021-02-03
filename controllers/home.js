const show = function(req, res) {
    res.render('home', {
        user: req.user
    });
};

module.exports = {
    show,
};