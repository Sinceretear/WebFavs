var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json())

Category = require('./models/categories')
Website = require('./models/websites')

//Connect to mongoose
mongoose.connect('mongodb://localhost/favoritewebsites');
var db = mongoose.connection;


app.get('/', function(req, res){
  res.send('please use the api endpoints /api/categories or api/websites');
});


// Gets Categories
app.get('/api/categories', function(req, res) {
  Category.getCategories(function(err, categories){
      if(err){
        throw err;
      }
      res.json(categories);
  });
});

app.post('/api/categories', function(req, res) {
  var category = req.body;
  Category.addCategory(category, function(err, category){
      if(err){
        throw err;
      }
      res.json(category);
  });
});

app.put('/api/categories/:_id', function(req, res) {
  var id = req.params._id;
  var category = req.body;
  Category.updateCategory(id, category, {}, function(err, category){
      if(err){
        throw err;
      }
      res.json(category);
  });
});

app.delete('/api/categories/:_id', function(req, res) {
  var id = req.params._id;
  Category.deleteCategory(id, function(err, category){
      if(err){
        throw err;
      }
      res.json(category);
  });
});


// Gets Websites
app.get('/api/websites', function(req, res) {
  Website.getWebsites(function(err, websites){
      if(err){
        throw err;
      }
      res.json(websites);
  });
});

app.get('/api/websites/:_id', function(req, res) {
  Website.getWebsiteById(req.params._id, function(err, website){
      if(err){
        throw err;
      }
      res.json(website);
  });
});

app.post('/api/websites', function(req, res) {
  var website = req.body;
  Website.addWebsite(website, function(err, website){
      if(err){
        throw err;
      }
      res.json(website);
  });
});

app.put('/api/websites/:_id', function(req, res) {
  var id = req.params._id;
  var website = req.body;
  Website.updateWebsite(id, website, {}, function(err, website){
      if(err){
        throw err;
      }
      res.json(website);
  });
});

app.delete('/api/websites/:_id', function(req, res) {
  var id = req.params._id;
  Website.deleteWebsite(id, function(err, website){
      if(err){
        throw err;
      }
      res.json(website);
  });
});

var server = app.listen(process.env.PORT || 3000, function () {
   var port = server.address().port;
   console.log("App now running on port", port);
 });
