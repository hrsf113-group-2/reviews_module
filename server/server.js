const express = require('express');
const morgan = require('morgan');
const path = require('path');
const database = require('../db/db.js');

const app = express();
const port = 3004;

app.use(morgan('dev'));
app.use('/locations/:locationID/reviews', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/locations/:locationID/reviews', (req, res) => {
  database.Location.findOne({ locationID: parseInt(req.params.locationID, 0) },
    (err, currentLocationReviews) => {
      if (err) {
        res.send(err); 
        // res.sendSta rtus(500);

      } else {
        res.send(currentLocationReviews);
      }
    });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port:${port}!`));
