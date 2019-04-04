const faker = require('faker');
const Location = require('./db.js');

const createRandomFiveStarRating = () => faker.random.number({
  min: 1,
  max: 5,
});

for (let i = 1; i <= 100; i += 1) {
  const samplePosts = { locationID: i, reviews: [] };


  // pick a random number between 1 and 20, then generate that many reviews
  const numberOfReviews = Math.floor(Math.random() * 20) + 1;
  for (let j = 0; j < numberOfReviews; j += 1) {
    const review = {
      ID: j + 1,
      name: faker.name.findName(),
      date: faker.date.recent(),
      avatar: faker.image.avatar(),
      text: faker.lorem.paragraphs(),
      'rating-accuracy': createRandomFiveStarRating(),
      'rating-communication': createRandomFiveStarRating(),
      'rating-cleanliness': createRandomFiveStarRating(),
      'rating-location': createRandomFiveStarRating(),
      'rating-check-in': createRandomFiveStarRating(),
      'rating-value': createRandomFiveStarRating(),
    };
    samplePosts.reviews.push(review);
  }

  const insertSampleBlogs = () => {
    Location.create(samplePosts);
  };
  insertSampleBlogs();
}
