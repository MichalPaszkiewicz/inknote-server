var mongoose = require('mongoose');

var threadSchema = mongoose.Schema({
	id: String,
	subject: String,
	posts: []
});

var Thread = mongoose.model('Thread', threadSchema);
	
exports.findAll = function(req, res){
	var thisResult = null;
	Thread.find(function(err, threads){
		if(err) return console.error(err);
		res.send(threads);
	});
}

exports.addThread = function(req, res){
	var thread = req.body;
	//console.log('Adding thread: ' + JSON.stringify(thread));
	var newThread = new Thread(thread);
	newThread.save(function(err, newThread){
		if (err) return console.error(err);
	});
}



/*
exports.addThread = function(req, res) {
    var thread = req.body;
    console.log('Adding thread: ' + JSON.stringify(thread));
    db.collection('threads', function(err, collection) {
        collection.insert(thread, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
*/