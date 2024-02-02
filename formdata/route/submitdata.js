const express = require("express");
const router = express.Router();
const { submitdataFn, upload } = require("../controller/submitdata");

router.post("/submitemployeedata(.html)?", upload.single('taxDeclarationForm'), submitdataFn);

module.exports = router;