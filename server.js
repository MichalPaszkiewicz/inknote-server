var express = require('express'),
	database = require('./database'),
	threads = require('./routes/threads'),
	guide = require('./routes/guide'),
	posts = require('./routes/posts');
 
var app = express();

app.use(function(req, res, next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});
 
app.get('/guide', guide.findAll);
app.get('/threads', threads.findAll);
app.post('/threads', threads.addThread);
app.get('/posts', posts.getAllPosts);
//app.get('/posts/:id', posts.findById);
app.post('/posts', posts.addPost);
//app.delete('/posts/:id', posts.deletePost);
 
app.listen(3000);
console.log('Listening on port 3000...');