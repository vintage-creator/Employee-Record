const express = require("express");
const router = express.Router();
const {getdataFn} = require("../controller/getdata");

router.get("/getallemployeedata(.html)?", getdataFn);

module.exports = router;