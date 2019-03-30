var express = require('express');
var app = express();
var port = 3000;
var Location = require('../db/db.js');

app.use(express.static(__dirname + '/../client/dist'));


// where does app.get grab Location ID from? Currently in my db, it's 1-10

app.get(`/locations/:locationID/reviews`, function(req, res) {
  //this should now readAll data from the database
  // therefore import mongoose function that will go and read the data in the database
  console.log('req.params.locationID: ', req.params.locationID)
  Location.findOne({locationID: parseInt(req.params.locationID)}, function(err, result) {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  })

})


app.listen(port, () => console.log(`Listening on port:${port}!`))