// let request = require('request');

function index(req, res, next) {
	res.send('<h1>some html</h1>');
	// res.status(404).send('Sorry, we cannot find that!')
}

module.exports = {
	index
}