const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/locations', { useNewUrlParser: true });
const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('connected to the database!');
});


const reviewSchema = new mongoose.Schema({
  ID: Number,
  name: String,
  date: Date,
  avatar: String,
  text: String,
  'rating-accuracy': Number,
  'rating-communication': Number,
  'rating-cleanliness': Number,
  'rating-location': Number,
  'rating-check-in': Number,
  'rating-value': Number,
});

const locationSchema = new mongoose.Schema({
  locationID: String,
  reviews: [reviewSchema],
});

const Location = mongoose.model('location', locationSchema);


module.exports = Location;
