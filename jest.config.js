const path = require('path');
const fileMockPath = path.resolve(__dirname, 'tests/__mocks__', 'fileMock.js');
const setupTestPath= path.resolve(__dirname, 'tests', 'setUpTests.js');
module.exports = {
  'setupFilesAfterEnv': [setupTestPath],
  'coverageDirectory': './jest-coverage',
  'testEnvironment': 'jsdom',
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': fileMockPath,
    '\\.(css|less|scss|sass)$': fileMockPath
  }
}