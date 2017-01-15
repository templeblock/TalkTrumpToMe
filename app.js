var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();
  var filename = undefined;

  // WE SHOULD ONLY PUT A MILLION FILES AT A TIME BUT I DONT WANT TO BREAK MY SERVER
  form.multiples = false;

  // grab em by the /uploads directory
  form.uploadDir = path.join(__dirname, '/public/uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    //console.log(file);
    filename = path.join('/uploads', file.name);
    fs.rename(file.path, path.join(form.uploadDir, file.name));
    
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.json(filename);
  });

  // parse the incoming request containing the form data
  form.parse(req);



});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});