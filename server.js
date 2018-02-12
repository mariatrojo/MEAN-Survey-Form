var express = require('express');
var path = require("path");
var session = require('express-session');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.use(session({
	secret: 'codingdojorocks',
	resave: true,
	saveUninitialized: true
})); 

app.get('/', function(req, res) {
	res.render("index");
});

app.get('/result', function(req, res) {
	res.render("result");
});

app.post('/dojoForm', function(req, res) {
	sessionName = req.body.name;
	sessionLocation = req.body.location;
	sessionLanguage = req.body.language;
	sessionComment = req.body.comment

	res.redirect('/result');
});

app.listen(8000, function() {
	console.log("Survey Form on port 8000!")
});