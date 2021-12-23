var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/name', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const homeRoute = require('./home.route');
const usersRoute = require('./users.route');
router.use('/', homeRoute);
router.use('/users', usersRoute);


module.exports = router;
