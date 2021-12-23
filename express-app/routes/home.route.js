let express = require('express');
let router = express.Router();

let homeController = require('../controllers/home.controller');

router.route('/').get(homeController.index);

module.exports = router;