const rate_limit = require("express-rate-limit");

// to prevent brute force attack

const limiter = rate_limit({
  windowMs: 15 * 60 * 1000, //  15min x60secondsx1000ms
  max: 100,
  message: "Too many requests from this IP, please try again later",
});

module.exports = limiter;
