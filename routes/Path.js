const express = require("express");
const router = express.Router();
const { getAllCars, createCar ,riskRating , createQuote } = require('../controllers/controls');


router.route("/").get(getAllCars);
router.route("/carvalue").post(createCar);
router.route("/riskrating").post(riskRating);
router.route("/quote").post(createQuote );

 

module.exports = router;



















