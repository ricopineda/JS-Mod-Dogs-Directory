
var mongoose = require('mongoose');

var Doggie = mongoose.model('Doggie');
 
module.exports = {


	show: function(req, res) {

	    Doggie.find({}, function(err, doggie) {
    		console.log(doggie)
    		res.render('index', {dog: doggie});
    	})
	},

	process: function(req, res) {
	    var dogInstance = new Doggie()
    	dogInstance.name = req.body.name
    	dogInstance.save(function(err){

    	})
    	res.redirect('/');
	},

	add: function(req, res) {

		res.render("add");
	},

	display: function(req, res) {
    	var id = req.params.id;
    	console.log(id)
    	Doggie.findOne({_id: id}, function(err, doggie) {
        	console.log(doggie)
    	res.render("display", {dog: doggie});    
		})
	},

	delete: function(req, res) {

    	var id = req.params.id;
    		console.log(id)

    	Doggie.remove({_id: id}, function(err){
    	res.redirect("/");
    	})		
	},

	edit: function(req, res) {

    	var id = req.params.id;
    		console.log(id)
    	Doggie.findOne({_id: id}, function(err, doggie) {
        	console.log(doggie)
    	res.render("edit", {dog: doggie});    
		})		
	},

	update: function(req, res) {

	    var id = req.params.id;
	    Doggie.findOne({_id: id}, function(err, doggie){
	        console.log("here",doggie)
	        doggie.name = req.body.name
	        doggie.save(function(err){
				if(err) {
				  console.log('Error');
				} else {
				  res.redirect('/');
				}
	        })
	    })
	}
}














