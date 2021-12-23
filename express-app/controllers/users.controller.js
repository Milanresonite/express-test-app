
function index(req, res, next) {
	// res.send("users are being shown");
	res.download('mk.pdf');
}

module.exports = {
	index
}