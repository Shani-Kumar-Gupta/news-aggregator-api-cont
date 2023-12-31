require('dotenv').config();

const {
  PORT_NUMBER,
  JWT_SECRET_KEY,
  JWT_ACCESS_TOKEN_EXPIRATION_TIME,
  NEWS_AGGREGATOR_API_KEY,
  NODE_ENV
} = process.env;

module.exports = {
  PORT_NUMBER,
  JWT_SECRET_KEY,
  JWT_ACCESS_TOKEN_EXPIRATION_TIME,
  NEWS_AGGREGATOR_API_KEY,
  NODE_ENV
};
