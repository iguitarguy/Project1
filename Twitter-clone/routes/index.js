var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

// Renders the HTML files using the ejs template enging
exports.index = function(request, response) {
    res.render('index', { title: 'ejs' });
};

router.get('/', function (request, response) {
    response.render('index', { user : request.user });
});

router.get('/register', function(request, response) {
    response.render('register', { });
});

router.post('/register', function(request, response) {
    Account.register(new Account({ username : request.body.username }), 
        request.body.password, function(err, account) {
            if(err) {
                return response.render('register', {info: "That username already exists."});
            }

            passport.authenticate('local')(request, response, function() {
                response.redirect('/dashboard');
            });
        });
});

router.get('/login', function(request, response) {
    response.render('login', { user : request.user });
});

router.post('/login', passport.authenticate('local'), function(request, response) {
    response.redirect('/dashboard');
});

router.get('/logout', function(request, response) {
    request.logout();
    response.redirect('/');
});

router.get('/dashboard', function(request, response) {
    response.render('dashboard');
});

module.exports = router;