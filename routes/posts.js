var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	user: String,
	userID: String,
	threadID: String,
	time: String,
	message: String
});

var Post = mongoose.model('Post', postSchema);
	
exports.getAllPosts = function(req, res){
	var thisResult = null;
	Post.find(function(err, posts){
		if(err) return console.error(err);
		res.send(posts);
	});
}

exports.addPost = function(req, res){
	var post = req.body;
	var newPost = new Post(post);
	newPost.save(function(err, newPost){
		if (err) return console.error(err);
	});
}

//ones below need replacing with mongoose

/*
exports.findById = function(req, res){
	var id = req.params.id;
	console.log('Retrieving post: ' + id);
	db.collection('posts', function(err, collection){
		collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item){
			res.send(item);
		});
	});
};
*/

/*
exports.addPost = function(req, res) {
    var post = req.body;
    console.log('Adding post: ' + JSON.stringify(post));
    db.collection('posts', function(err, collection) {
        collection.insert(post, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}*/

/*
exports.deletePost = function(req, res) {
    var id = req.params.id;
    console.log('Deleting post: ' + id);
    db.collection('posts', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}*/