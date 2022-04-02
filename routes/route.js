const express = require("express");
const app = express();

const router = express.Router();
const {getProject,getSingleProject,getCustomer} = require("../controller/index");
router.get("/getproject/:customerid", getProject);
router.get("/getcustomer/:email", getCustomer);
router.get("/getproject/:customerid/:projectid", getSingleProject);
module.exports = router;