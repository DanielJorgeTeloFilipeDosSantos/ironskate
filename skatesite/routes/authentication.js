'use strict';

const { Router } = require('express');
const router = Router();
const User = require('./../models/user');


router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const passwordHash = req.body.password;
  User.signUp(username, email, passwordHash)
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      console.log('Signed up user', user);
      res.redirect('index');
      // res.render('user');
    })
    .catch(error => {
      console.log('Error during sign-up process', error);
    });
});

router.get('/signin', (req, res, next) => {
  res.render('signin');
});


router.post('/signin', (req, res, next) => {
  const email = req.body.email;
  const passwordHash = req.body.password;
  User.signIn(email, passwordHash)
    .then(() => {
      console.log('Signed in user', user);
      res.redirect('index');
      // res.render('index');
    })
    .catch(error => {
      console.log('Error during sign-in process', error);
    });
});


router.post('/sign-out', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;