const express = require("express");
const router = express.Router();
const anatomiaController = require("../controllers/anatomiaController");

router.get('/anatomia', anatomiaController.homeAnatomia);
router.get('/resumenes-anato', anatomiaController.resumenesAnatomia);
router.get('/presentaciones-anato', anatomiaController.presentacionesAnatomia);
router.get('/cuestionarios-anato', anatomiaController.cuestionariosAnatomia);
router.get('/parciales-anato', anatomiaController.parcialesAnatomia);
router.get('/libros-anato', anatomiaController.librosAnatomia);
router.get('/extras-anato', anatomiaController.extrasAnatomia);

module.exports = router;