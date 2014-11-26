var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect("mongodb://#######:###########@ds056727.mongolab.com:56727/################");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback(){
});

//var Server = mongo.Server,
//	Db = mongo.Db,
//	BSON = mongo.BSONPure;
	
//var server = new Server('localhost', 27017, {auto_reconnect: true});
//db = new Db('postdb', server, {safe: false});

//var MongoClient = mongo.MongoClient;
//var server = mongo.Server;
//var mongoClient = new MongoClient(new server('localhost', 27017));
//db = mongoClient.db("mydb");

//mongo.MongoClient.connect('mongodb://App:geeks@ds056727.mongolab.com:56727/superdatabase', { server: { auto_reconnect: true } }, function(err, db) {
//  	if(!err){
//		console.log("Connected to 'mongolab'");
//		db.collection('posts', {strict:true}, function(err, collection){
//			if(err){
//				console.log("The 'posts' collection doesn't exist. Creating it with sample data. . .");
//				populateDB(err, db);
//			}
//		});
//	}		
//});

//db.open(function(err, db){
//	console.log("Open error: " + err);
//	console.log("Open DB: " + db);
//	if(!err){
//		console.log("Connected to 'postdb'");
//		db.collection('posts', {strict:true}, function(err, collection){
//			if(err){
//				console.log("The 'posts' collection doesn't exist. Creating it with sample data. . .");
//				populateDB();
//			}
//		});
//	}	
//});



/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function(err, db) {
	var guide = [
		{
			name: "Introduction", htmlText: "<p>This site is a guide to all developers wishing to contribute to or integrate with the inknote project.</p>"
			+ "<p>The aim of this project is to create a free, open source, browser based scoring program that will be both user and developer friendly.</p>"
		},
		{
			name: "Source code", htmlText: "<h3>GitHub</h3>" 
			+ "<p>You can find the source code over <a href='https://github.com/MichalPaszkiewicz/inknote'>here</a>.</p>"
			+ "<p>If you see any bugs, or would like to improve the code or add some features, you are invited to help out with the project. Please go ahead and fork the code, pushing any changes.</p>"
			+ "<p>Once you have proved yourself trustworthy, by pushing sufficient good code or otherwise, you will be added as a contributor to the project to make things easier for you and give you more power over the code.</p>"
			+ "<p>If you have any questions regarding changes you would like to make, please go ahead and post them in the forum on this page."
			+ "<h3>Licensing</h3>"
			+ "<p>This project is entirely open source, so feel free to use any or all of it. You have every right to do so, so long as you do not try to sell the code you get from here as a product.</p>"
		},
		{
			name: "Debugging/Logging", htmlText: "<h3>Turn it on</h3>" 
			+ "<p>To turn debugging mode on, go to</p>"
			+ "<p class='centalic'>Developers >> Log >> On</p>"
			+ "<h3>Change style</h3>"
			+ "<p>To change debugging style, go to</p>"
			+ "<p class='centalic'>Developers >> Log >> UI/Console</p>"
			+ "<p>UI mode will use alertify logs to display the log, while console will print the logs to the console. Please be aware that when using UI logging, there is no record of the logs.</p>"
		},
		{
			name: "Adding plugins", htmlText: "<h3>Na na na na na nana heeeeeey jude</h3><h3>Hey judey judey jude</h3>"
		}
	];
	
	var threads = [
		{
			id: "1",
			subject: "Welcome to the forum!",
			posts: []
		}
	];
	
	var users = [
		{
			name: "Admin",
			id: "0"
		},
		{
			name: "Trollface",
			id: "1"
		}
	];
	
    var posts = [
    {
        user: "Trollface",
		userID: "1",
		threadID: "1",
		time: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
		message: "First post"
    },
    {
        user: "Admin",
		userID: "0",
		threadID: "1",
		time: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
		message: "Welcome to the developer forum for inknote! Feel free to post questions, chat and help each other out. Abusers will burn in a very special level of hell. A level reserved for child molesters and people who talk at the theatre."
    }];
	
	db.collection('guide', function(err, collection){
		collection.insert(guide, {safe:true}, function(err, result){});
	});
	
	db.collection('users', function(err, collection){
		collection.insert(users, {safe:true}, function(err, result){});
	});
	
	db.collection('threads', function(err, collection){
		collection.insert(threads, {safe:true}, function(err, result){});
	});
 
    db.collection('posts', function(err, collection) {
        collection.insert(posts, {safe:true}, function(err, result) {});
    });
};
