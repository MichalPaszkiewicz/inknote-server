exports.findAll = function(req, res) {
    db.collection('guide', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};