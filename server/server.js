const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Location = require('../db/db.js');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/locations/:locationID/reviews', (req, res) => {
  Location.findOne({ locationID: parseInt(req.params.locationID, 0) },
    (err, currentLocationReviews) => {
      if (err) {
        res.sendStatus(500);
      } else {
        /* Should I change this? I want to actually render the App component and have this currentLocationReviews
         be passed into App state so that I can re-render, right?
        */
        res.send(currentLocationReviews);
      }
    });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port:${port}!`));
