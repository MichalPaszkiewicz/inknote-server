//exports.findById = function(req, res) {
//    res.send({id:req.params.id, name: "The Name", description: "description"});
//};

exports.findById = function(req, res){
	var id = req.params.id;
	console.log('Retrieving post: ' + id);
	db.collection('posts', function(err, collection){
		collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item){
			res.send(item);
		});
	});
};

//exports.findAll = function(req, res) {
//    res.send([{name:'post1'}, {name:'post2'}, {name:'post3'}]);
//};

exports.findAll = function(req, res) {
    db.collection('posts', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

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
}

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
}