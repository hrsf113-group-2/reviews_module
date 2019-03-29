//set up mongoose here
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/locations', {useNewUrlPaarser: true});
var db = mongoose.connection;
    
var reviewSchema = new mongoose.Schema({
  ID: Number,
  Name: String,
  Date: Date,
  Avatar: String,
  ReviewText: String,
  RatingAccuracy: Number,
  RatingCommunication: Number,
  RatingCleanliness: Number,
  RatingLocation: Number,
  RatingCheckIn: Number,
  RatingValue: Number
})

var locationSchema = new mongoose.Schema({
  location: String,
  reviews: [reviewSchema],
})

var Location = mongoose.model('location', locationSchema);
Location.create({ 
  location: 'Tokyo',
  reviews: [{
    ID: 1,
    Name: 'Kevin',
    Date: new Date().getMonth(),
    Avatar: 'https://avatar.com',
    ReviewText: 'blahblahblah',
    RatingAccuracy: 1,
    RatingCommunication: 2,
    RatingCleanliness: 2,
    RatingLocation: 2,
    RatingCheckIn: 2,
    RatingValue: 2
  }]
})

console.log('hello')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //we're connected!
})

