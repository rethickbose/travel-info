require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_PORT = process.env.MONGODB_PORT || 3001;

module.exports = {
  PORT,
  MONGODB_URI,
  MONGODB_PORT
};
