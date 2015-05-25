/* Load packages */
require('dotenv').load();
var express = require('express');
//var mongodb = require('mongodb').MongoClient;
//var mongoose = require('mongoose');

var appTitle = 'Shoe Runner';
var app = express();
var apiRouter = express.Router();

//setup express settings
app.set('views', './views');
app.set('view engine', 'jade');

app.use('/api', apiRouter);
app.use(express.static('public'));//grants public access to all items below this directory

/* Router paths */

/* App paths */
app.get('/', function (req, res){
  res.render('index', {title: appTitle});
});

var server = app.listen(process.env.APP_PORT, function(){
  console.log('listening on port %s', process.env.APP_PORT);
});
