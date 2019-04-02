module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  testMatch: ['<rootDir>client/dist/mainTest.js'],
};
