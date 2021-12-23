let express = require('express');
let router = express.Router();

let usersController = require('../controllers/users.controller');

router.route('/').get(usersController.index);

module.exports = router;