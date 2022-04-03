const express = require("express");
const app = express();

const router = express.Router();
const {getProject,getSingleProject,getCustomer,getForecast} = require("../controller/index");
router.get("/getproject/:customerid", getProject);
router.get("/getcustomer/:email", getCustomer);
router.get('/getforecast/:customer_id', getForecast);
router.get("/getfore/:forecastid", getSingleProject);
module.exports = router;