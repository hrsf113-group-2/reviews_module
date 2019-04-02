var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/locations', {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to the database!');
});


var reviewSchema = new mongoose.Schema({
  ID: Number,
  name: String,
  date: Date,
  avatar: String,
  text: String,
  "rating-accuracy": Number,
  "rating-communication": Number,
  "rating-cleanliness": Number,
  "rating-location": Number,
  "rating-check-in": Number,
  "rating-value": Number,
})

var locationSchema = new mongoose.Schema({
  locationID: String,
  reviews: [reviewSchema],
})

var Location = mongoose.model('location', locationSchema);


module.exports = Location;