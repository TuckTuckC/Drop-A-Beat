const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeCtrl = require('../controllers/home');

router.get('/', homeCtrl.show);

// DELETE /post/:id
const isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
};

router.delete('/post/:id', isLoggedIn, homeCtrl.delPost);

router.get('/auth/google', passport.authenticate(
    'google',
    {scope: ['profile', 'email']},
));
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/',
        failureRedirect: '/',
    },
));
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
