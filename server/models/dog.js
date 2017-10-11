
var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
	name: String
})

var Doggie = mongoose.model('Doggie', DogSchema); 