const express = require('express');
const router = express.Router();
const bioquimicaController = require('../controllers/bioquimicaController');

router.get('/bioquimica', bioquimicaController.homeBioquimica);
router.get('/libros-bioqui', bioquimicaController.librosBioquimica);
router.get('/labs-bioqui', bioquimicaController.labsBioquimica);
router.get('/guias-bioqui', bioquimicaController.guiasBioquimica);
router.get('/presentaciones-bioqui', bioquimicaController.presentacionesBioquimica);
router.get('/resumenes-bioqui', bioquimicaController.resumenesBioquimica);
router.get('/panuccis-bioqui', bioquimicaController.panuccisBioquimica);
router.get('/examenes-bioqui', bioquimicaController.examenesBioquimica);

module.exports = router;