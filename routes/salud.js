const express = require('express');
const router = express.Router();
const saludController = require('../controllers/saludpublicaController');

router.get('/salud', saludController.homeSaludp);
router.get('/libros-salud', saludController.librosSalud);
router.get('/realidad-salud', saludController.realidadSalud);
router.get('/epidemiologia-salud', saludController.epidemiologiaSalud);
router.get('/asis-salud', saludController.asisSalud);
router.get('/investigacion-salud', saludController.investigacionSalud);
router.get('/preventiva-salud', saludController.preventivaSalud);
router.get('/examenes-salud', saludController.examenesSalud);

module.exports = router;
