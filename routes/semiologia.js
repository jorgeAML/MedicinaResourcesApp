const express = require('express');
const router = express.Router();
const semioController = require("../controllers/semiologiaController");

router.get('/semiologia', semioController.homeSemio);
router.get('/libros-semio', semioController.librosSemio);
router.get('/intro-semio', semioController.introductoriaSemio);
router.get('/adultos-semio', semioController.adultosSemio);
router.get('/ninos-semio', semioController.ninosSemio);
router.get('/derma-semio', semioController.dermaSemio);
router.get('/examenes-semio', semioController.examenesSemio);

module.exports = router;