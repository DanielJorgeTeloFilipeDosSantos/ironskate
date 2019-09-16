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
  const password = req.body.password;
  User.signUp(username, email, password)
    .then (user => {
      console.log('Signed up user', user);
      res.redirect('index');
    })
    .catch(error => {
      console.log('Error during sign-up process', error);
    });
});

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});


router.post('/signin', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findByEmail({email})
    .then(user => {
      console.log('Signed in user', user);
      res.redirect('index');
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