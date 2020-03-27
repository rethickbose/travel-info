const mongoose = require("mongoose");
const config = require("../utils/config");
const url = config.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(result => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connecting to MongoDB:", error.message);
  });

const travelInfoInfoSchema = new mongoose.Schema({
  cityName: {
    type: String,
    minlength: 2,
    required: true
  },
  countryName: {
    type: String,
    minlength: 2,
    required: true
  },
  continent: {
    type: String,
    minlength: 3,
    required: true
  },
  currencyUsed: {
    type: String,
    minlength: 2,
    required: true
  },
  languages: {
    type: [String],
    minlength: 2,
    required: true
  }
});

const TravelInfo = mongoose.model("TravelInfo", travelInfoInfoSchema);

module.exports = TravelInfo;
