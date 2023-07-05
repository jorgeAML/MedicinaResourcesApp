const express = require('express');
const router = express.Router();
const homeController = require("../controllers/HomeController");
const controlOthers = require("../controllers/others");

/*GET HOME PAGE */
router.get('/', homeController.respondWithIndex);

/* GET OTHERS */
router.get('/about', controlOthers.about);
/* GET ANATOMIA PAGES */


module.exports = router;