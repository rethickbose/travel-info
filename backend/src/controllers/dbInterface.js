const TravelInfo = require("../models/travelInfoModel");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  app.get("/", function(req, res) {
    res.send("Hello World");
  });

  app.get("/api/cities", function(req, res) {
    TravelInfo.find()
      .then(objects => {
        res.json(objects);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.post("/api/city", function(req, res) {
    const body = req.body;
    TravelInfo.findOne({ cityName: body.cityName })
      .then(objects => {
        if (objects === null) {
          res.json("Error: Does not exist");
        } else {
          res.json(objects);
        }
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  });

  app.post("/api/city-update-currency", function(req, res) {
    const body = req.body;
    TravelInfo.updateOne(
      { cityName: body.cityName },
      { currencyUsed: body.currencyUsed }
    )
      .then(objects => {
        if (objects === null) {
          res.json("Error: Does not exist");
        } else {
          res.json(objects);
        }
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  });

  app.post("/api/delete-city", function(req, res) {
    const body = req.body;
    TravelInfo.deleteOne({ cityName: body.cityName })
      .then(objects => {
        if (objects === null) {
          res.json("Error: Does not exist");
        } else {
          res.json(objects);
        }
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  });

  app.post("/api/create-new-entry", function(req, res, next) {
    const body = req.body;
    const travelInfoObject = new TravelInfo({
      cityName: body.cityName,
      countryName: body.countryName,
      continent: body.continent,
      currencyUsed: body.currencyUsed,
      languages: body.languages
    });

    TravelInfo.findOne({ cityName: body.cityName })
      .then(objects => {
        if (objects === null) {
          travelInfoObject
            .save()
            .then(res.json("Success"))
            .catch(error => console.log(error));
        } else {
          res.json("Already Exists");
        }
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  });
};
