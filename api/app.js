var express = require("express");
var app = express();
var bodyParser  = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* allow CORS */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/* API routes */
app.get('/users', function(req, res) {

  setTimeout(function(){

    res.json([
      { id: 1, name: 'Madonna' },
      { id: 2, name: 'Britney' },
      { id: 3, name: 'Justin'},
      { id: 4, name: 'Jamiroquiai'},
      { id: 5, name: 'Chencho' },
    ]);
  }, 1000);
}); 

app.listen(3033, function() {

  console.log("React Training Backend running on http://localhost:3033" );
});
