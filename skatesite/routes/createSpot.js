'use strict';

const { Router } = require('express');
const router = Router();

router.get('/create', (req, res, next) => {
res.render('createSpot')

});

module.exports = router;
