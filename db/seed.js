const faker = require('faker');
const Location = require('./db.js');

for (let i = 1; i <= 10; i += 1) {
  const samplePosts = { locationID: i, reviews: [], };
  // plug in bottom 4 lines for 5starRatings but be sure the ratings are actually different each time.
  var randomFiveStarRating = faker.random.number({
    min: 1,
    max: 5,
  })
  
  // pick a random number between 1 and 20, then generate that many reviews
  var numberOfReviews = Math.floor(Math.random() * 20) + 1;
  for (var j = 0; j < numberOfReviews; j++) {
    var review = {
      ID: faker.random.number(),
      name: faker.name.findName(),
      date: faker.date.recent(),
      avatar: faker.image.avatar(),
      text: faker.lorem.paragraph(),
      "rating-accuracy": faker.random.number({
        min: 1,
        max: 5,
      }), 
      "rating-communication": faker.random.number({
        min: 1,
        max: 5,
      }), 
      "rating-cleanliness": faker.random.number({
        min: 1,
        max: 5,
      }), 
      "rating-location": faker.random.number({
        min: 1,
        max: 5,
      }), 
      "rating-check-in": faker.random.number({
        min: 1,
        max: 5,
      }), 
      "rating-value": faker.random.number({
        min: 1,
        max: 5,
      }), 
    }
    samplePosts.reviews.push(review);
  }

  const insertSampleBlogs = function() {
    Location.create(samplePosts)
  };
  insertSampleBlogs();
}

