exports.findAll = function(req, res) {
    db.collection('threads', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

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