var mongoose = require('mongoose');

var guideSchema = mongoose.Schema({
	name: String,
	htmlText: String
});

var Guide = mongoose.model('Guide', guideSchema, 'guide');

exports.findAll = function(req, res){
	var thisResult = null;
	Guide.find(function(err, guide){
		if(err) return console.error(err);
		res.send(guide);
	});
}