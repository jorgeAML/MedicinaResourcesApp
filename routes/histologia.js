const express = require('express');
const router = express.Router();
const histologiaController = require('../controllers/histologiaController');

router.get('/histologia', histologiaController.homeHistologia);
router.get('/libros-histo', histologiaController.librosHistologia);
router.get('/guias-histo', histologiaController.guiasHistologia);
router.get('/prese-histo', histologiaController.presentacionesHisto);
router.get('/miuril-histo', histologiaController.presentMiuruilHisto);
router.get('/silvia-histo', histologiaController.presentSilviaHisto);
router.get('/resumenes-histo', histologiaController.resumenesHistologia);
router.get('/sofi-histo', histologiaController.resumenesSofiHisto);
router.get('/laminillas-i', histologiaController.laminillasIHistologia);
router.get('/laminillas-ii', histologiaController.laminillasIIHistologia);
router.get('/parciales-histo', histologiaController.parcialesHistologia);

module.exports = router;