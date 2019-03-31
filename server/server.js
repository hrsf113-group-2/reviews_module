const express = require('express');

const morgan = require('morgan'); // Add in Morgan middleware functionality.

const path = require('path');

const app = express();

const port = 3000;

const Location = require('../db/db.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/locations/:locationID/reviews', (req, res) => {
  Location.findOne({ locationID: parseInt(req.params.locationID, 0) },
    (err, currentLocationReviews) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(currentLocationReviews);
      }
    });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port:${port}!`));
