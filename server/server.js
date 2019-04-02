const express = require('express');

const app = express();

const port = 3000;

const Location = require('../db/db.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get(`/locations/:locationID/reviews`, function(req, res) {
  //this should now readAll data from the database
  // therefore import mongoose function that will go and read the data in the database
  Location.findOne({locationID: parseInt(req.params.locationID)}, function(err, currentLocationReviews) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(currentLocationReviews);
    }
  });
});


app.listen(port, () => console.log(`Listening on port:${port}!`))