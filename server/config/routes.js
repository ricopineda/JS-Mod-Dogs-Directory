
var doggie = require('../controllers/dogs.js');

module.exports = function(app) {

	app.get('/', function(req, res) {

		doggie.show(req, res)
	})

	app.post('/process', function(req, res) {
    	console.log("POST DATA", req.body);

		doggie.process(req, res)
	})

	app.get('/add', function(req, res) {

    	doggie.add(req, res)

	})

	app.get('/display/:id', function(req, res) {

		doggie.display(req, res)
	})

	app.get('/delete/:id', function(req, res) {

		doggie.delete(req, res)
	})

	app.get('/edit/:id', function(req, res) {

		doggie.edit(req, res)
	})

	app.post('/update/:id', function(req, res) {

		doggie.update(req, res)
	})

}