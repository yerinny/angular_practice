var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_albums');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
// look for templates here

app.set('view engine', 'ejs');
// use ejs to render pages


app.get('/', (req, res)=> {
    console.log("Hello in the terminal")
    res.render('index');
});

app.post('/process', (req,res) => {
    console.log("Form was submitted");
    console.log(req.body);
    res.redirect('/')
});

app.listen(8000, () => console.log("Listening on 8000"));