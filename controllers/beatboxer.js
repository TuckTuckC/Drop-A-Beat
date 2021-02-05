const show = function(req, res) {
    res.render('beatboxer', {
        user: req.user,
    });
};

const create = function(req, res) {
    req.body.user = req.user._id;
        req.user.beatboxers.push(req.body);
        req.user.save(function(err) {
            res.redirect('/profile');
        });
        console.log('beatbixers', req.user.beatboxers);
};


module.exports = {
    show,
    create,
};