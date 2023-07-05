const express = require('express');
const router = express.Router();
const fisiologiaController = require('../controllers/fisiologiaController');

router.get('/fisiologia', fisiologiaController.homeFisiologia);
router.get('/resumenes-fisio', fisiologiaController.resumenesFisiologia);
router.get('/casos-fisio', fisiologiaController.casosFisiologia);
router.get('/presentaciones-garcia-fisio', fisiologiaController.presentacionesGarciaFisiologia);
router.get('/presentaciones-molina-fisio', fisiologiaController.presentacionesMolinaFisio);
router.get('/parciales-fisio', fisiologiaController.parcialesFisiologia);
router.get('/resumenes-yuri-fisio', fisiologiaController.resumenesYuriFisio);
router.get('/resumenes-kenia-fisio', fisiologiaController.resumenesKeniaFisio);
router.get('/resumenes-jorge-fisio', fisiologiaController.resumenesJorgeFisio);

module.exports = router;