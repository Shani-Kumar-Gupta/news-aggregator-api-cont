const jwt = require('jsonwebtoken');
const {
  JWT_SECRET_KEY,
  JWT_ACCESS_TOKEN_EXPIRATION_TIME,
} = require('../config/env.config');

const isValidEmail = function (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const generateAccessToken = (userDetails) => {
  return jwt.sign(userDetails, JWT_SECRET_KEY, {
    expiresIn: JWT_ACCESS_TOKEN_EXPIRATION_TIME,
  });
};

module.exports = {
  isValidEmail,
  generateAccessToken
};
