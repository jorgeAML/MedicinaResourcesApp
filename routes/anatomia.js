const express = require("express");
const router = express.Router();
const anatomiaController = require("../controllers/anatomiaController");

router.get('/anatomia', anatomiaController.homeAnatomia);

module.exports = router;